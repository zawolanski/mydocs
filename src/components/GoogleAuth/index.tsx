import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { ReactComponent as Logo } from '@/assets/logo/google.svg';

interface GoogleAuthProps {
  handlePopupOpen: (val: boolean) => void;
}

const GoogleAuth = ({ handlePopupOpen }: GoogleAuthProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const [t] = useTranslation(['signin', 'common']);

  const onGoogleClick = async () => {
    handlePopupOpen(true);
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      enqueueSnackbar(t('notification.success'));
      navigate('/documents');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error?.message;
      if (!msg?.includes('auth/popup-closed-by-user')) enqueueSnackbar(t('notification.error'), { variant: 'error' });
    }
    handlePopupOpen(false);
  };

  const labelType = location.pathname.includes('signin') ? 'in' : 'up';

  return (
    <Button variant="outlined" size="large" sx={{ width: '90%', mb: 4, p: '14px 14px' }} onClick={onGoogleClick}>
      <Box sx={{ height: 25, width: 25, mr: 1 }}>
        <Logo />
      </Box>
      {t(`controls.googleSign${labelType}`, { ns: 'common' })}
    </Button>
  );
};

export default GoogleAuth;
