// models
import MODELS from "@/db/models";

// utils
import connectDB from "@/db/mongoose";
import { getAuthAPIHandler } from "@/lib/next-mongoose-api";

// types
import {
  type UserDocument,
  type UserModel
} from "@/types/documents/collections/user";

// env
const jwtSecret =
  process.env.TRIPPING_JWT_SECRET || "";

const { register, login, validate, logout } =
  getAuthAPIHandler<UserDocument, UserModel>({
    connection: connectDB,
    Model: MODELS.Users,
    jwtSecret,
    cookieName: "__user_auth__"
  });

export const handleUserRegister = register();
export const handleUserLogin = login();
export const handleUserValidate = validate();
export const handleUserLogout = logout();
