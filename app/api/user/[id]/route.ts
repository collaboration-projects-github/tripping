// next config
export const dynamic = "force-dynamic";

// handlers
import {
  handleGetUser,
  handleUpdateUser
} from "@/app/api/user/handler";

// methods
export const GET = handleGetUser;

export const PATCH = handleUpdateUser;
