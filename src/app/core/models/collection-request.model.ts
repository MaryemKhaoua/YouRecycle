import { User } from "./user.model";
import { RequestItem } from "./request-item.model";

export enum CollectionStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  VALIDATED = "VALIDATED",
  REJECTED = "REJECTED",
}

export interface CollectionRequest {
  id: number;
  user?: User;
  estimatedWeight: number;
  address: string;
  city: string;
  collectionDate: Date;
  timeSlot: string;
  status: CollectionStatus;
  additionalNotes?: string;
  items: RequestItem[];
  createdAt: Date;
}
