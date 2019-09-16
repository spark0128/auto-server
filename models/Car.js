import mongoose, { Schema } from 'mongoose';

export const CarSchema = new Schema({
  name: String,
  price: Number,
  carTypes: [String],
  images: [String],
  condition: String
});

export const CarModel = mongoose.model('Car', CarSchema, 'cars');