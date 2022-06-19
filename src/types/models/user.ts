/** The model representing the user */
export interface User {
  /** Actual id of a particular user */
  id: string;
  /** User's firstname */
  firstname?: string;
  /** User's lasttname */
  lastname?: string;
  /** User's email */
  email: string;
}
