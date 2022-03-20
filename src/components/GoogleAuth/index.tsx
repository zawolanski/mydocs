import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { ReactComponent as Logo } from '@/assets/logo/google.svg';
import { useSnackbar } from 'notistack';

interface GoogleAuthProps {
  handlePopupOpen: (val: boolean) => void;
}

const GoogleAuth = ({ handlePopupOpen }: GoogleAuthProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  const onGoogleClick = async () => {
    handlePopupOpen(true);
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      enqueueSnackbar('You were succesfully logged in');
      navigate('/documents');
    } catch (e) {
      enqueueSnackbar('An error occured while logging in', { variant: 'error' });
    }
    handlePopupOpen(false);
  };

  return (
    <Button variant="outlined" size="large" sx={{ width: '90%', mb: 4, p: '14px 14px' }} onClick={onGoogleClick}>
      <Box sx={{ height: 25, width: 25, mr: 1 }}>
        <Logo />
      </Box>
      Sign {location.pathname.includes('signin') ? 'in' : 'up'} with Google
    </Button>
  );
};

export default GoogleAuth;
