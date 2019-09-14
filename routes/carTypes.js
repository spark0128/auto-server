import { CarTypeModel } from '../models/CarType';

export default (app) => {
    app.get('/v1/carTypes', async (req, res) => {
        try {
            const carTypes = await CarTypeModel.find() || [];
            if (carTypes) {
                res.send(carTypes);
            } else {
                res.status(404).end();
            }
        } catch (err) {
            res.status(404).json({ error: err });
        }
    });

    app.post('/v1/carType', (req, res) => {
        const carType = new CarTypeModel({ 
            name: req.body.name, 
            image: req.body.image
        });
        carType.save((err, doc) => {
            if (err) {
                console.error(err);
            };
            res.send(doc);
        })
    });



    app.post('/v1/carTypes', (req, res) => {
        const carTypes = []; // Add objects
        CarTypeModel.insertMany(carTypes, function (err, docs) {
            if (err){ 
                return console.error(err);
            } else {
              res.send(docs);
            }
        })
    });

    app.put('/v1/carType/:id', (req, res) => {
        CarTypeModel.findOneAndUpdate({_id: req.params.id}, req.body,
            (err, updatedDoc) => {
              if (err) {
                res.status(500).end();
              } else {
                res.send(updatedDoc);
                res.status(200).end();
              }
            }
          );
    });
}

