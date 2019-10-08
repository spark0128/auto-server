import mongoose, { Model } from 'mongoose';
import { users, brands } from './data';
import { UserModel } from '../models/User';
import { BrandModel } from '../models/Brand';
import { ModelModel } from '../models/Model';
import { ModelDetailModel } from '../models/ModelDetail';

mongoose.connect('mongodb+srv://automate:Tjddn128@car-db-tmwmy.mongodb.net/test?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', async () => {
  console.log('Database connection is open!');
  // UserModel.insertMany(users, (error) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log('Inserted users');
  //   }
  // });

  // Upsert Brands
  await Promise.all(brands.map(async (brand) => {
    // Upsert a Brand
    const b = await BrandModel.findOneAndUpdate({ name: brand.name }, {
      name: brand.name,
    }, { upsert: true })
      .populate('models')
      .exec();

    // Upsert Models
    const models = await Promise.all((brand.models || []).map(async (model) => {
      // Upsert a Model
      const m = await ModelModel.findOneAndUpdate({ name: model.name }, {
        name: model.name,
      }, { upsert: true })
        .populate('modelDetails')
        .exec();
      // Upsert ModelDetails
      const modelDetails = await Promise.all((model.modelDetails || []).map(async (modelDetail) => {
        return await ModelDetailModel.findOneAndUpdate({ name: modelDetail.name }, modelDetail, { upsert: true });
      }));
      // Save ModelDetails to Model
      m.modelDetails = modelDetails;
      return await m.save();
    }));

    // Save Models to Brand
    b.models = models;
    return await b.save();
  }));
});
