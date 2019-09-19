import mongoose, { Schema } from 'mongoose';

export const CarTypeSchema = new Schema({
  name: String,
  image: String,
  cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }]
});

export const CarTypeModel = mongoose.model('CarType', CarTypeSchema, 'carTypes');