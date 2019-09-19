import mongoose from 'mongoose';
import { users, cars, brands } from './data';
import { UserModel } from '../models/User';
import { CarModel } from '../models/Car';
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
    // TODO: carTypes, brand를 추가    

    /**
     * 필드 이름 바꾸기
     * 업데이트 시 기존 Model에 기존 필드, 새로운 이름의 필드 둘다 있어야한다
    CarModel.update({}, { $rename: { categories: 'carTypes' } }, { multi: true }, function(err, blocks) {
      if(err) { throw err; }
      console.log('Done!');
    });
    */

});