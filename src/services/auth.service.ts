import { User } from "../models/user.model";
import { generateToken } from "../utils/jwt";
import { comparePassword } from "../utils/password";
import bcrypt from "bcryptjs";

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found!");
  }

  const isValid = await comparePassword(password, user.password);
  if (!isValid) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(String(user._id));
  return {
    token,
    user: {
      id: String(user._id),
      email: user.email,
      name: user.name,
    },
  };
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new Error("User already exists!");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = generateToken(String(newUser._id));
  return {
    token,
    user: {
      id: String(newUser._id),
      email: newUser.email,
      name: newUser.name,
    },
  };
};
