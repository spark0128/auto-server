import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    phoneNumber: {
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
    firstName: String,
    lastName: String,
    email: String,
    address: String,
});

export const UserModel = mongoose.model('User', UserSchema);
