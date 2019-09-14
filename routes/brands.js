import { BrandModel } from '../models/Brand';

export default (app) => {
    app.get('/v1/brands', async (req, res) => {
        try {
            const brands = await BrandModel.find() || [];
            if (brands) {
                res.send(brands);
            } else {
                res.status(404).end();
            }
        } catch (err) {
            res.status(404).json({ error: err });
        }
    });

    app.post('/v1/brand', (req, res) => {
        const brand = new BrandModel({ 
            name: req.body.name, 
            image: req.body.image
        });
        brand.save((err, doc) => {
            if (err) {
                console.error(err);
            };
            res.send(doc);
        })
    });

    app.post('/v1/brands', (req, res) => {
        const brands = [
            {name: "Lexus", image: "https://i.imgur.com/kp27DPn.png"},
            {name: "Toyota", image: "https://i.imgur.com/tNGgrlW.png"},
            {name: "Ford", image: "https://i.imgur.com/INHeTx6.png"},
            {name: "Mercedes Benz", image: "https://i.imgur.com/s5iHrc7.png"},
            {name: "Land Rover", image: "https://i.imgur.com/Y5fZsCR.png"},
            {name: "Hyundai", image: "https://i.imgur.com/d6piULQ.png"},
            {name: "SsangYong", image: "https://i.imgur.com/1lCLOYJ.png"},
            {name: "BMW", image: "https://i.imgur.com/Veq5nhz.png"},
            {name: "Chevrolet", image: "https://i.imgur.com/QqhJ3au.png"},
            {name: "KIA", image: "https://i.imgur.com/oQIdOtl.png"},
            {name: "Audi", image: "https://i.imgur.com/viByoKq.png"},
            {name: "Honda", image: "https://i.imgur.com/ZwwOw2M.png"},
            {name: "Nissan", image: "https://i.imgur.com/qlKEAL0.png"},
            {name: "Bentley", image: "https://i.imgur.com/xUEgqSp.png"},
            {name: "Porsche", image: "https://i.imgur.com/erz7v51.png"},
            {name: "Mazda", image: "https://i.imgur.com/dEcFwXv.png"},
            {name: "Mitsubishi", image: "https://i.imgur.com/IpGGdQo.png"},
            {name: "Cadillac", image: "https://i.imgur.com/R9UNi2A.png"},
            {name: "Volkswagen", image: "https://i.imgur.com/GOYkoDB.png"},
            {name: "Suzuki", image: "https://i.imgur.com/kYPutVm.png"},
            {name: "Subaru", image: "https://i.imgur.com/yJvIt0g.png"},
            {name: "Peugeot", image: "https://i.imgur.com/Jm2xzak.png"},
            {name: "Mini", image: "https://i.imgur.com/9WnhX7g.png"},
            {name: "Rolls-Royce", image: "https://i.imgur.com/pFIJR5b.png"},
        ]; // Add objects
        BrandModel.insertMany(brands, function (err, docs) {
            if (err){ 
                return console.error(err);
            } else {
              res.send(docs);
            }
        })
    });

    app.put('/v1/brand/:id', (req, res) => {
        BrandModel.findOneAndUpdate({_id: req.params.id}, req.body,
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

