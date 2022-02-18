import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, useRef } from 'react';

export const useAuth = () => {
  const isMounted = useRef(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) setLoggedIn(true);
        setCheckingStatus(false);
      });
    }

    return () => {
      isMounted.current = false;
    };
  });

  return { loggedIn, checkingStatus };
};
