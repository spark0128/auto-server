import mongoose, { Schema } from 'mongoose';

export const ModelDetailSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  yearRange: String,

  model: { type: Schema.Types.ObjectId, ref: 'Model' },
  cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }],
});

export const ModelDetailModel = mongoose.model('ModelDetail', ModelDetailSchema, 'model-details');
