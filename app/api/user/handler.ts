// db connection
import connectDB from "@/db/mongoose";

// libraries
import { getAPIHandler } from "@/lib/next-mongoose-api";

// models
import MODELS from "@/db/models";

// types
import {
  type UserDocument,
  type UserModel
} from "@/types/documents/collections/user";

// handlers
const { getDocument, updateDocument } =
  getAPIHandler<UserDocument, UserModel>(
    connectDB,
    MODELS.Users
  );

// exports
export const handleGetUser = getDocument();

export const handleUpdateUser = updateDocument();
