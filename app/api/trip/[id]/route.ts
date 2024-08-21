// next config
export const dynamic = "force-dynamic";

// handlers
import {
  handleGetTrip,
  handleUpdateTrip,
  handleDeleteTrip
} from "@/app/api/trip/handler";

// methods
export const GET = handleGetTrip;

export const PATCH = handleUpdateTrip;

export const DELETE = handleDeleteTrip;
