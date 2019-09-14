import mongoose, { Schema } from 'mongoose';

export const CarTypeSchema = new Schema({
  name: String,
  image: String
});

export const CarTypeModel = mongoose.model('CarType', CarTypeSchema, 'carTypes');