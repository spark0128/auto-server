import mongoose, { Schema } from 'mongoose';

export const ModelSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
  modelDetails: [{ type: Schema.Types.ObjectId, ref: 'ModelDetail' }],
  cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

ModelSchema.virtual('numModelDetails', {
  ref: 'ModelDetail',
  localField: '_id',
  foreignField: 'model',
  count: true,
});

ModelSchema.virtual('numCars', {
  ref: 'Car',
  localField: '_id',
  foreignField: 'model',
  count: true,
});

export const ModelModel = mongoose.model('Model', ModelSchema, 'models');
