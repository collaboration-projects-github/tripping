// db connection
import connectDB from "@/db/mongoose";

// libraries
import { getAPIHandler } from "@/lib/next-mongoose-api";

// models
import MODELS from "@/db/models";

// types
import {
  type TripDocument,
  type TripModel
} from "@/types/documents/collections/trip";

// handlers
const {
  getDocuments,
  getDocument,
  addDocuments,
  updateDocument,
  deleteDocument
} = getAPIHandler<TripDocument, TripModel>(
  connectDB,
  MODELS.Trips
);

// exports
export const handleGetTrips = getDocuments();

export const handleGetTrip = getDocument();

export const handleAddTrips = addDocuments();

export const handleUpdateTrip = updateDocument();

export const handleDeleteTrip = deleteDocument();
