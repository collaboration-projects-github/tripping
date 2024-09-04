// next config
export const dynamic = "force-dynamic";

// handlers
import { handleUserValidate } from "@/app/api/auth/handler";

// methods
export const GET = handleUserValidate;
