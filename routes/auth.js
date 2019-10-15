/**
 * External dependencies
 */
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

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

export default (app) => {
  /**
   * @api {post} /verifications RequestVerification
   * @apiName RequestVerification
   * @apiGroup Auth
   */
  app.post('/v1/verifications', async (req, res) => {
    const { phoneNumber } = req.body;
    // TODO: Validate params

    const code = generateRandom6DigitNumber();
    const message = await client.messages
      .create({
        body: `Verification code is ${code}`,
        from: '+12294698213',
        to: phoneNumber,
      });

    const verification = await new PhoneVerificationModel({
      id: message.sid,
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
  app.put('/v1/verifications/:verificationId/confirm', async (req, res) => {
    const { verificationId } = req.params;
    const { code } = req.body;
    // TODO: Validate params

    const verification = await PhoneVerificationModel.findById(verificationId);
    if (!verification) {
      // TODO: Enhance error handling
      return res.sendStatus(404);
    }
    if (verification.code !== code) {
      // TODO: Enhance error handling
      return res.sendStatus(409);
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
  app.post('/v1/signup', async (req, res) => {
    const {
      firstName,
      lastName,
      phoneNumber,
      username,
      password,
    } = req.body;
    // TODO: Validate params

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

    res.send(me);
  });

  /**
   * @api {post} /signin SignIn
   * @apiName SignIn
   * @apiGroup Auth
   */
  app.post('/v1/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    // Check password
    if (user.password !== crypto.createHash('sha512').update(password).digest('base64')) {
      res.sendStatus(401);
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.send({ token });
  });
}
