import mongoose, { Schema } from 'mongoose';

export const ImageSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
});

export const ImageModel = mongoose.model('Image', ImageSchema);
