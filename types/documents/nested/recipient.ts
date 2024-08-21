// libraries
import { ObjectId } from "mongoose";

// types
import { type IssueDocument } from "@/types/documents/nested/issue";
import { type UserDocument } from "@/types/documents/collections/user";

export interface RecipientDocument
  extends Document {
  recipient: UserDocument | ObjectId | string;
  amount: number;
  issue: IssueDocument;
}
