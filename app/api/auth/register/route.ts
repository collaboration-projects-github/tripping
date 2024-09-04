// next config
export const dynamic = "force-dynamic";

// handlers
import { handleUserRegister } from "@/app/api/auth/handler";

// methods
export const POST = handleUserRegister;
