import mongoose from 'mongoose';
import { users, brands } from './data';
import { UserModel } from '../models/User';
import { BrandModel } from '../models/Brand';

mongoose.connect('mongodb+srv://automate:Tjddn128@car-db-tmwmy.mongodb.net/test?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Database connection is open!');
  // UserModel.insertMany(users, (error) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log('Inserted users');
  //   }
  // });

  // BrandModel.insertMany(brands, (error) => {
  //   if (error) {
  //     console.error(error);
  //   }
  // });

  // CarModel.insertMany(cars, (error) => {
  //   if (error) {
  //     console.error(error);
  //   }
});
