/**
 * External dependencies
 */
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import PhoneNumber from 'awesome-phonenumber';

/**
 * Internal dependencies
 */
import { UserModel } from '../models/User';
import { PhoneVerificationModel } from '../models/PhoneVerification';
import { generateRandom6DigitNumber } from '../libs/utils';

// TODO: Extract to file
export const JWT_SECRET = 'secret';
const TWILIO_ACCOUNT_SID = 'AC542a2e9eda27a4afe49856d133b9253a';
const TWILIO_AUTH_TOKEN = '969e34dd9b98408f4e95eb14539fa801';

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// TODO: Change to KH (Cambodia)
const COUNTRY_CODE = 'KR';

export default (app) => {
  /**
   * @api {post} /verifications RequestVerification
   * @apiName RequestVerification
   * @apiGroup Auth
   */
  app.post('/v1/verifications', [
    body('phoneNumber').custom((value) => {
      return new PhoneNumber(value, COUNTRY_CODE).isValid();
    }).customSanitizer((value) => {
      return new PhoneNumber(value, COUNTRY_CODE).getNumber('international');
    })
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { phoneNumber } = req.body;
    const code = generateRandom6DigitNumber();
    await client.messages
      .create({
        body: `Verification code is ${code}`,
        from: '+12294698213',
        to: phoneNumber,
      });

    const verification = await new PhoneVerificationModel({
      phoneNumber,
      code,
    }).save();

    res.send(verification);
  });

  /**
   * @api {put} /verifications/:verificationId/confirm ConfirmVerification
   * @apiName ConfirmVerification
   * @apiGroup Auth
   */
  app.put('/v1/verifications/:verificationId/confirm', [
    body('code').not().isEmpty()
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { verificationId } = req.params;
    const { code } = req.body;

    const verification = await PhoneVerificationModel.findById(verificationId);
    if (!verification) {
      // TODO: Enhance error handling
      return res.status(404).send({ message: 'Not found verification' });
    }
    if (verification.code !== code) {
      // TODO: Enhance error handling
      return res.status(409).send({ message: 'Invalid code' });
    }

    verification.status = 'Verified';
    await verification.save();
    res.send(verification);
  });

  /**
   * @api {post} /signup SignUp
   * @apiName SignUp
   * @apiGroup Auth
   */
  app.post('/v1/signup', [
    body('firstName').not().isEmpty(),
    body('lastName').not().isEmpty(),
    body('phoneNumber').custom((value) => {
      return new PhoneNumber(value, COUNTRY_CODE).isValid();
    }).customSanitizer((value) => {
      return new PhoneNumber(value, COUNTRY_CODE).getNumber('international');
    }),
    body('username').not().isEmpty(),
    body('password').not().isEmpty(),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      phoneNumber,
      username,
      password,
    } = req.body;

    // Check phoneNumber verified
    const verification = await PhoneVerificationModel.findOne({ phoneNumber });
    if (!verification) {
      // TODO: Enhance error handling
      return res.status(409).send({ message: 'Phone number is not verified' });
    }

    // Check already signed up with this username
    const user = await UserModel.findOne({ username });
    if (user) {
      // TODO: Enhance error handling
      return res.status(409).send({ message: 'Username already exists' });
    }

    // Encrypt password
    const encryptedPassword = crypto.createHash('sha512').update(password).digest('base64');

    const me = await new UserModel({
      firstName,
      lastName,
      username,
      phoneNumber,
      password: encryptedPassword,
    }).save();

    const token = jwt.sign({ id: me._id }, JWT_SECRET);
    res.send({ user: me, token });
  });

  /**
   * @api {post} /signin SignIn
   * @apiName SignIn
   * @apiGroup Auth
   */
  app.post('/v1/signin', [
    body('username').not().isEmpty(),
    body('password').not().isEmpty(),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      // TODO: Enhance error handling
      return res.status(404).send({ message: 'Not found user' });
    }

    // Check password
    if (user.password !== crypto.createHash('sha512').update(password).digest('base64')) {
      res.status(401).send({ message: 'Invalid password' });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.send({ user, token });
  });
}
