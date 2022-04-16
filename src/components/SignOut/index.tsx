import { Button } from '@mui/material';
import { getAuth, signOut } from 'firebase/auth';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [t] = useTranslation('signout');
  const navigate = useNavigate();

  const signUserOut = async () => {
    setIsLoading(true);
    const auth = getAuth();

    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      enqueueSnackbar(t('notification.error'), { variant: 'error' });
    }
    setIsLoading(false);
  };

  return (
    <Button onClick={signUserOut} disabled={isLoading} variant="outlined" sx={{ width: '60%' }} size="small">
      {t('signOutButton')}
    </Button>
  );
};

export default SignOut;
