import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

import GoogleAuth from '@components/GoogleAuth';
import FormTemplate from '@/templates/Form';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [t] = useTranslation(['signin', 'common']);

  const handlePopupOpen = (val: boolean) => setIsPopupOpen(val);

  useEffect(() => {
    setIsLoading(isPopupOpen);
  }, [isPopupOpen]);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoading(true);

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);

      enqueueSnackbar(t('notification.success'));
      navigate('/documents');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error?.message;
      if (msg?.includes('auth/wrong-password') || msg?.includes('auth/user-not-found')) {
        enqueueSnackbar(t('notification.invalidCredentials'), { variant: 'error' });
      } else {
        enqueueSnackbar(t('notification.error'), { variant: 'error' });
      }
    }

    setIsLoading(false);
  };

  return (
    <FormTemplate
      isLoading={isLoading}
      additionalContent={
        <MuiLink
          variant="body2"
          underline="none"
          component={Link}
          to="/signup"
          sx={{ mt: { xs: 0, sm: 1.75 }, color: 'text.primary' }}
        >
          {t('signUpButton')}
        </MuiLink>
      }
    >
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: isLoading ? 0.5 : 1,
        }}
        autoComplete="off"
      >
        <Typography variant="h6" sx={{ mb: 1.25 }}>
          {t('title')}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2.25 }}>
          {t('subtitle')}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '90%', mb: 1.5 }}>
          <TextField
            label={t('controls.email.label', { ns: 'common' })}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box sx={{ width: '100%' }}>
            <TextField
              sx={{ width: '100%' }}
              label={t('controls.password.label', { ns: 'common' })}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox onChange={() => setShowPassword((prevState) => !prevState)} />}
              label={t('controls.password.show', { ns: 'common' }) as string}
            />
          </Box>
        </Box>
        <Divider sx={{ mb: 2 }}>{t('or')}</Divider>
        <GoogleAuth handlePopupOpen={handlePopupOpen} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
          <Button component={Link} to="/forgot-password" sx={{ mt: 0.75, pl: 0, pr: 0 }}>
            {t('controls.password.forgot', { ns: 'common' })}
          </Button>
          <Button type="submit" variant="contained" disabled={isLoading}>
            {t('signInButton')}
          </Button>
        </Box>
      </Box>
    </FormTemplate>
  );
};

export default SignIn;
