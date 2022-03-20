import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signUserOut = async () => {
    setIsLoading(true);
    const auth = getAuth();

    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <button type="button" onClick={signUserOut} disabled={isLoading}>
      Sign out
    </button>
  );
};

export default SignOut;
