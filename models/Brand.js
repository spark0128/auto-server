import mongoose, { Schema } from 'mongoose';

export const BrandSchema = new Schema({
  name: String,
  image: String
});

export const BrandModel = mongoose.model('Brand', BrandSchema, 'brands');