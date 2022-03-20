import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';

import FormTemplate from '@/templates/Form';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [t] = useTranslation(['forgotPassword', 'common']);

  const onSubmit = async (e: React.SyntheticEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setTimeout(() => navigate('/signin'), 1000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error?.message;
      if (msg.includes('auth/user-not-found')) {
        enqueueSnackbar(t('notification.notFound', { ns: 'common', field: 'Email' }), {
          variant: 'error',
        });
      } else {
        enqueueSnackbar(t('notification.error'), { variant: 'error' });
      }
    }
    setIsLoading(false);
  };

  return (
    <FormTemplate isLoading={isLoading}>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: isLoading ? 0.5 : 1,
        }}
      >
        <Typography variant="h6" sx={{ mb: 1.25 }}>
          {t('title')}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2.25 }}>
          {t('subtitle')}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '90%', mb: 3 }}>
          <TextField
            label={t('controls.email.label', { ns: 'common' })}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Typography variant="body1" width="90%" marginBottom={3}>
          {t('text')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
          <Button component={Link} to="/signin" sx={{ mt: 0.75, pl: 0, pr: 0 }}>
            {t('logInInsteadButton')}
          </Button>
          <Button type="submit" variant="contained" disabled={isLoading}>
            {t('signUpButton')}
          </Button>
        </Box>
      </Box>
    </FormTemplate>
  );
};

export default ForgotPassword;
