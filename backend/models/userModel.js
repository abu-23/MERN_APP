import mongoose from 'mongoose';

const { Schema } = mongoose;

const userModelSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    quote: { type: String },
  },
  { collection: "user-data" }
);

const UserModel = mongoose.model('UserModel', userModelSchema);

export default UserModel;
