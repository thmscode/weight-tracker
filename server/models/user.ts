import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  full_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  id: {
    type: String,
    requireD: true,
    unique: true
  },
  weight: Number,
  height: Number,
  bmi: Number,
  weight_entries: [
    {
      date: { type: Date, required: true, unique: true, sparse: true },
      weight: { type: Number, required: true }
    }
  ]
})

const User = mongoose.model('User', userSchema);
export default User;