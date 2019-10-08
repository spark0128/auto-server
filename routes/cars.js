
import { CarModel } from '../models/Car';

export default (app) => {
  /**
   * @api {post} /cars/search SearchCars
   * @apiName SearchCars
   * @apiGroup Car
   */
  app.post('/v1/cars/search', async (req, res) => {
    // TODO: Validate body
    const cars = await CarModel.find(req.body);
    res.send({ cars });
  });

  /**
   * @api {get} /cars/:carId GetCar
   * @apiName GetCar
   * @apiGroup Car
   */
  app.get('/v1/cars/:carId', async (req, res) => {
    const car = await CarModel.findById(req.params.carId);
    res.send(car);
  });

  /**
   * @api {post} /cars CreateCar
   * @apiName CreateCar
   * @apiGroup Car
   */
  app.post('/v1/cars', async (req, res) => {
    // TODO: Validate body
    const car = await new CarModel(req.body).save();
    res.send(car);
  });

  /**
   * @api {put} /cars/:carId UpdateCar
   * @apiName UpdateCar
   * @apiGroup Car
   */
  app.put('/v1/cars/:carId', async (req, res) => {
    // TODO: Validate body
    const car = await CarModel.findByIdAndUpdate(req.params.carId, req.body);
    res.send(car);
  });
}
