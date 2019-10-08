import mongoose, { Schema } from 'mongoose';

export const ModelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
  modelDetails: [{ type: Schema.Types.ObjectId, ref: 'ModelDetail' }],
  cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
});

export const Model = mongoose.model('Model', ModelSchema, 'models');
