import mongoose, { Schema } from 'mongoose';

export const PhoneVerificationSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Requested', 'Verified'],
    default: 'Requested',
  },
});

export const PhoneVerificationModel = mongoose.model('PhoneVerification', PhoneVerificationSchema);
