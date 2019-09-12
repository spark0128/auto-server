import { UserModel } from '../models/User';

export default (app) => {
    app.get('/v1/users', async (req, res) => {
        const users = await UserModel.find() || [];
        res.send(users);
    });

    app.get('/v1/users/:id', async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id);
            if (user) {
                res.send(user);
            } else {
                res.status(404).end();
            }
        } catch (err) {
            res.status(404).json({
                error: err
            });
        }
    });

    app.post('/v1/users', (req, res) => {
        if (!req.isAdmin) {
            return res.status(403).end();
        }
        // TODO: Implement
        res.status(200).end();
    });

    app.post('/v1/users/register', (req, res) => {
        res.status(200).end();
    });

    app.put('/v1/users/:id', (req, res) => {
        UserModel.findById(req.params.id, (err, doc) => {
            if (err) {
                res.status(500).end();
            } else {
                if (!doc) {
                    res.status(404).end();
                } else {
                    doc.favorites = req.body.favorites;
                }
                doc.save((err, updatedDoc) => {
                    if (err) {
                        console.error(err);
                        res.status(500).end();
                    } else {
                        res.send(updatedDoc);
                    }
                })
            }
        });
    });

    app.get('/v1/users/fav/:id', (req, res) => {
        UserModel.find({_id: req.params.id})
            .populate('favorites')
            .exec((err, docs) => {
                if (err) {
                    console.error(err);
                } else {
                    res.send(docs);
                }
            })
            // .then((err, docs) => {
            //     if (err) {
            //         console.error(err);
            //     } else {
            //         res.status(200).json({
            //             count: docs.length,
            //             favorites: docs.map(doc => {
            //                 return {
            //                     _id: doc._id,
            //                     name: doc.name,
            //                     price: doc.price,
            //                     request: {
            //                         type: "GET",
            //                         url: "http://localhost:8055/v1/cars/" + doc._id
            //                     }
            //                 };
            //             })
            //         });
            //     }
            // }).catch (err => {
            //     res.status(500).json({
            //         error: err
            //     })
            // })
    })

    app.delete('/v1/users/:id', (req, res) => {
        if (!req.isAdmin) {
            return res.status(403).end();
        }
        res.status(200).end();
    });
}
