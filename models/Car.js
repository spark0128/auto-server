import mongoose, { Schema } from 'mongoose';

export const CarSchema = new Schema({
  name: String,
  price: Number,
  categories: [String],
  images: [String]
});

export const CarModel = mongoose.model('Car', CarSchema, 'cars');