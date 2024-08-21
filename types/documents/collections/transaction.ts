// types
import { type ObjectId } from "mongoose";
import { type ContributionDocument } from "@/types/documents/nested/contribution";
import { type RecipientDocument } from "@/types/documents/nested/recipient";
import { type TripDocument } from "@/types/documents/collections/trip";
import { type UserDocument } from "@/types/documents/collections/user";
import {
  type Document,
  type Model
} from "@/types/_document";

export interface TransactionDocument
  extends Document {
  trip: TripDocument | ObjectId | string;
  owner: UserDocument | ObjectId | string;
  category:
    | "personal"
    | "food"
    | "rent"
    | "travel"
    | "others";
  title: string;
  contributions: ContributionDocument[];
  recipients: RecipientDocument[];
}

export interface TransactionModel
  extends Model<TransactionDocument> {}
