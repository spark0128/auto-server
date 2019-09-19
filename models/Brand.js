import mongoose, { Schema } from 'mongoose';

export const BrandSchema = new Schema({
  name: String,
  image: String,
  cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }]
});

export const BrandModel = mongoose.model('Brand', BrandSchema, 'brands');