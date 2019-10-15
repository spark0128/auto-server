
import { CarModel } from '../models/Car';

export default (app) => {
  /**
   * @api {post} /cars/search SearchCars
   * @apiName SearchCars
   * @apiGroup Car
   */
  app.post('/v1/cars/search', async (req, res) => {
    try {
      // TODO: Validate body
      const cars = await CarModel.find(req.body);
      res.send({ cars });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'InternalServerError' });
    }
  });

  /**
   * @api {post} /cars/search/count SearchCarsCount
   * @apiName SearchCarsCount
   * @apiGroup Car
   */
  app.post('/v1/cars/search/count', async (req, res) => {
    try {
      // TODO: Validate body
      const count = await CarModel.count(req.body);
      res.send({ count });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'InternalServerError' });
    }
  });

  /**
   * @api {get} /cars/:carId GetCar
   * @apiName GetCar
   * @apiGroup Car
   */
  app.get('/v1/cars/:carId', async (req, res) => {
    try {
      const car = await CarModel.findById(req.params.carId);
      res.send(car);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'InternalServerError' });
    }
  });

  /**
   * @api {post} /cars CreateCar
   * @apiName CreateCar
   * @apiGroup Car
   */
  app.post('/v1/cars', async (req, res) => {
    try {
      // TODO: Validate body
      const car = await new CarModel(req.body).save();
      res.send(car);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'InternalServerError' });
    }
  });

  /**
   * @api {put} /cars/:carId UpdateCar
   * @apiName UpdateCar
   * @apiGroup Car
   */
  app.put('/v1/cars/:carId', async (req, res) => {
    try {
      // TODO: Validate body
      const car = await CarModel.findByIdAndUpdate(req.params.carId, req.body);
      res.send(car);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'InternalServerError' });
    }
  });
}
