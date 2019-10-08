/**
 * External dependencies
 */
import jwt from 'express-jwt';

/**
 * Internal dependencies
 */
import { UserModel } from '../models/User';
import { JWT_SECRET } from './auth';

export default (app) => {
  /**
   * @api {get} /users/me GetMe
   * @apiName GetMe
   * @apiGroup User
   */
  app.get('/v1/users/me', jwt({ secret: JWT_SECRET }), async (req, res) => {
    const me = await UserModel.findById(req.user.id);
    res.send(me);
  });

  /**
   * @api {put} /users/me UpdateMe
   * @apiName UpdateMe
   * @apiGroup User
   */
  app.put('/v1/users/me', jwt({ secret: JWT_SECRET }), async (req, res) => {
    const {
      phoneNumber,
      email,
    } = req.body;
    // TODO: Validate params
    const me = await UserModel.findByIdAndUpdate(req.user.id, {
      phoneNumber,
      email,
    });
    res.send(me);
  });

  /**
   * @api {put} /users/me/change-password ChangePassword
   * @apiName ChangePassword
   * @apiGroup User
   */
  app.put('/v1/users/me/change-password', (req, res) => {
    // TODO: Implementation
  });

  /**
   * @api {get} /users/me/favorite-cars GetFavoriteCars
   * @apiName GetFavoriteCars
   * @apiGroup User
   */
  app.get('/v1/users/me/favorite-cars', (req, res) => {
    // TODO: Implementation
  });

  /**
   * @api {get} /users/me/posted-cars GetPostedCars
   * @apiName GetPostedCars
   * @apiGroup User
   */
  app.get('/v1/users/me/posted-cars', (req, res) => {
    // TODO: Implementation
  });
}
