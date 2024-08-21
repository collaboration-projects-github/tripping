// next config
export const dynamic = "force-dynamic";

// handlers
import {
  handleAddTrips,
  handleGetTrips
} from "@/app/api/trip/handler";

// methods
export const GET = handleGetTrips;

export const POST = handleAddTrips;
