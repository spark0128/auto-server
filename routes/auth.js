/**
 * External dependencies
 */
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

/**
 * Internal dependencies
 */
import { UserModel } from '../models/User';

// TODO: Extract to file
export const JWT_SECRET = 'secret';

export default (app) => {
  /**
   * @api {post} /signup SignUp
   * @apiName SignUp
   * @apiGroup Auth
   */
  app.post('/v1/signup', async (req, res) => {
    const {
      username,
      phoneNumber,
      password,
    } = req.body;
    // TODO: Validate params

    // Check already signed up with this username
    const user = await UserModel.findOne({ username });
    if (user) {
      res.sendStatus(409);
    }

    // TODO: Verify phoneNumber

    // Encrypt password
    const encryptedPassword = crypto.createHash('sha512').update(password).digest('base64');

    const me = await new UserModel({
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
