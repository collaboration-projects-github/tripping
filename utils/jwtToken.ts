// Imports
// Libraries
import {
  JwtPayload,
  sign,
  verify
} from "jsonwebtoken";

// Env Var
const jwtSecret =
  process.env.TRIPPING_JWT_TOKEN || "";

// Exports
export const createJwtToken = (
  data: {},
  maxAge: number
): string =>
  sign(data, jwtSecret, {
    expiresIn: maxAge
  });

export const verifyJwtToken = (
  value: string
): string | JwtPayload =>
  verify(value, jwtSecret);
