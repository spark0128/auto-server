import { BrandModel } from '../models/Brand';
import { CarModel } from '../models/Car';
import { CarTypeModel } from '../models/CarType';
import mongoose, { Schema } from 'mongoose';

export default (app) => {
  /**
   * GET /v1/cars
   * query
   * {
   *   brand: "brandName",
   *   carTypes: "carType1,carType2",
   *   condition: "",
   *   priceL: 0,
   *   priceH: 1000,
   * }
   */
  app.get('/v1/cars/1', async (req, res) => {
    const { brand, carTypes, condition, priceL, priceH } = req.query;
    if (brand) {
      const foundBrand = await BrandModel.find({ name: brand }).populate('cars');
      const cars = foundBrand.cars;
      res.send(cars);
    } else if (carTypes) {
      const carTypeArr = carTypes ? carTypes.split(',') : [];
      const carTypes = await CarTypeModel.find({ name: { $in: carTypeArr }}).populate('cars');
      const cars = carTypes.length ? carTypes.map((carType) => carType.cars).flat() : []; // TODO: Unique 추가
      res.send(cars);
    } else {
      // const cars = await CarModel.find().where('price').gte(priceL).lte(priceH).execute();
      // res.send(cars);
    }    
  });

  app.get('/v1/cars', async (req, res) => {
    const cars = await CarModel.find();
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

    //Populate된 자동차 보기
    app.get('/v2/car/:id', (req, res) => {
        CarModel.findOne({ _id: req.params.id })
        .populate('carTypes')
        .exec((err, doc) => {
            if (err) {
                console.error(err);
            } else {
                res.send(doc);
            }
        })
    });

    //carTypes필드 carType 아이디로 채우기
    app.put('/v1/car/:id', async (req, res) => {
        const car = await CarModel.findOne({ _id: req.params.id }).populate('carTypes');
        const carTypes = await CarTypeModel.find({
            '_id': { $in: [
                mongoose.Types.ObjectId('5d7cf7113325d20345c22a53'),
                mongoose.Types.ObjectId('5d7cf7113325d20345c22a56')
            ]}
        });
        console.log(carTypes);
        // car.carTypes.push(carTypes);
        // await car.save((err, doc) => {
        //     res.send(doc);
        // });
        car.carTypes = carTypes
        await car.save();
    });

    //carTypes필드 비우기
    app.put('/v1/car/emptify/:id', async (req, res) => {
        const car = await CarModel.findOne({ _id: req.params.id });
        car.carTypes = undefined;
        await car.save().then(doc => {
            console.log(doc);
        }) 
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
