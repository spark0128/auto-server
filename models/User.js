import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
    email: String,
    username: String,
    password: String,
    phoneNumber: [{ number: String, lang: [String] }],
    role: String,
    listedCars: [{ type: Schema.Types.ObjectId, ref: 'Car'}],
    favoriteCars: [{ type: Schema.Types.ObjectId, ref: 'Car'}],
});

export const UserModel = mongoose.model('User', UserSchema);
