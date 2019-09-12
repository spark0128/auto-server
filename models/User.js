import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
    email: String,
    username: String,
    role: String,
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    }],
});

export const UserModel = mongoose.model('User', UserSchema);
