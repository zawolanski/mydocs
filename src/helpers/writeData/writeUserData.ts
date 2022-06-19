import { doc, setDoc } from 'firebase/firestore';

import { db } from '@/firebase.config';
import { User } from '@/types/models/user';

export const writeUserData = async (user: User) => {
  await setDoc(doc(db, 'users', user.id), user);
};
