import { CarModel } from '../models/Car';

export default (app) => {
  app.get('/v1/cars', async (req, res) => {
    const { categories } = req.query;
    const categoryList = categories ? categories.split(',') : [];
    const cars = await CarModel.find(
      categoryList.length > 0 ?
        { categories: { $in: categoryList } } :
        undefined
    ) || [];
    res.send(cars);
  });

  app.get('/v1/cars/:id', async (req, res) => {
    try {
      const car = await CarModel.findById(req.params.id);
      if (car) {
        res.send(car);
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(404).json({
          error: err
      });
    }
  });

  app.post('/v1/cars', async (req, res) => {
    if (!req.isAdmin) {
      return res.status(403).end();
    }
    const car = await CarModel.create(req.body);
    if (car) {
      res.status(200).end();
    } else {
      res.status(500).end();
    }
  });

  app.put('/v1/cars/:id', (req, res) => {
    if (!req.isAdmin) {
      return res.status(403).end();
    }
    CarModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err) => {
        if (err) {
          res.status(500).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });

  app.delete('/v1/cars/:id', (req, res) => {
    if (!req.isAdmin) {
      return res.status(403).end();
    }
    CarModel.findByIdAndDelete(
      req.params.id,
      (err) => {
        if (err) {
          res.status(500).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });
}
