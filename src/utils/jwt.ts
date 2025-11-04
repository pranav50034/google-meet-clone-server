import jwt, { SignOptions, Secret } from "jsonwebtoken";
import config from "../config/index";

export interface JwtPayload {
  id: string;
}

export const generateToken = (userId: string): string => {
  const payload: JwtPayload = { id: userId };

  const options: SignOptions = {
    expiresIn: config.jwtExpiresIn as SignOptions["expiresIn"],
  };

  return jwt.sign(payload, config.jwtSecret as Secret, options);
};
