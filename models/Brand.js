import mongoose, { Schema } from 'mongoose';

export const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,

  models: [{ type: Schema.Types.ObjectId, ref: 'Model' }],
  cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
});

export const BrandModel = mongoose.model('Brand', BrandSchema, 'brands');
