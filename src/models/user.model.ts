import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  name?: string;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },
    name: { type: String },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
