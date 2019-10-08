import mongoose, { Schema } from 'mongoose';

export const CarSchema = new Schema({
  condition: {
    type: String,
    required: true,
    enum: ['Used', 'New'],
  },
  transmission: {
    type: String,
    required: true,
    enum: ['Automatic', 'Manual'],
  },
  driveType: {
    type: String,
    required: true,
    enum: ['FWD', 'RWD', '4WD', 'AWD', '2WD'],
  },
  fuelType: {
    type: String,
    required: true,
    enum: ['Diesel', 'Gasoline', 'Hybrid'],
  },
  carTypes: [{
    type: String,
    required: true,
    enum: ['Compact', 'Sedan', 'Hatchback', 'Truck', 'SUV', 'Minivan', 'Van', 'MPV', 'Sports', 'Wagon', 'Bus'],
  }],
  price: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  displacement: String,
  fuelEfficiency: String,
  gearbox: String,

  brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
  model: { type: Schema.Types.ObjectId, ref: 'Model' },
  modelDetail: { type: Schema.Types.ObjectId, ref: 'ModelDetail' },
});

export const CarModel = mongoose.model('Car', CarSchema, 'cars');
