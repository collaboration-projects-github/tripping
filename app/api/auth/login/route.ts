// next config
export const dynamic = "force-dynamic";

// handlers
import { handleUserLogin } from "@/app/api/auth/handler";

// methods
export const POST = handleUserLogin;
