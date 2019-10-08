import mongoose, { Schema } from 'mongoose';

export const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,

  models: [{ type: Schema.Types.ObjectId, ref: 'Model' }],
  cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

BrandSchema.virtual('numModels', {
  ref: 'Model',
  localField: '_id',
  foreignField: 'brand',
  count: true,
});

BrandSchema.virtual('numCars', {
  ref: 'Car',
  localField: '_id',
  foreignField: 'brand',
  count: true,
});

export const BrandModel = mongoose.model('Brand', BrandSchema, 'brands');
