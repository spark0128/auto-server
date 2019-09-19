import mongoose, { Schema } from 'mongoose';

export const CarSchema = new Schema({
  name: String,
  brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
  price: Number,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  carTypes: [{ type: Schema.Types.ObjectId, ref: 'CarType' }],
  images: [String],
  condition: String,
});

export const CarModel = mongoose.model('Car', CarSchema, 'cars');