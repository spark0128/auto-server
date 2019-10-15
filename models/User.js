import mongoose, { Schema } from 'mongoose';
import { ImageSchema } from './Image';

export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sellerType: {
    type: String,
    required: true,
    enum: ['Customer', 'Individual', 'Dealer'],
    default: 'Customer',
  },
  profileImage: ImageSchema,
  firstName: String,
  lastName: String,
  email: String,
  address: String,
});

export const UserModel = mongoose.model('User', UserSchema);
