// types
import { type ObjectId } from "mongoose";
import { type Document } from "@/types/_document";
import { type UserDocument } from "@/types/documents/collections/user";

export interface ContributionDocument
  extends Document {
  contributor: UserDocument | ObjectId | string;
  amount: number;
}
