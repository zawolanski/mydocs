import { Timestamp } from 'firebase/firestore';

/** The model representing the document */
export interface Document {
  /** Actual id of a particular document */
  id: string;
  /** The type of document */
  access: 'full' | 'partial';
  /** List of connected users to the document at a particular time */
  connectedUsers: string[];
  /** Treść w formacie JSON */
  content: string;
  /** List of invited users */
  invitedUser: string[];
  /** Document name */
  name: string;
  /** Owner's id */
  owner: string;
  /** The type of permissions */
  permissions: 'editor' | 'viewer';
  /** Creation date */
  createdAt: Timestamp;
  /** Date of the last update */
  updatedAt: Timestamp;
  /** Array with users who ever connected to the document */
  usersHistory: string[];
  /** Date of the latest file opening by owner */
  lastOpenedByOwner: Timestamp;
}
