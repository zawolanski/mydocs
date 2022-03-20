import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import FormTemplate from '@/templates/Form';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [t] = useTranslation('forgot');

  const onSubmit = async (e: React.SyntheticEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      console.log('Email was sent!');
      return;
    } catch (error) {
      console.error(error);
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
          Account recovery
        </Typography>
        <Typography variant="body2" sx={{ mb: 2.25 }}>
          Enter email address related to your account
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
          We will send you a verification link if we find an email in the database.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
          <Button component={Link} to="/signin" sx={{ mt: 0.75, pl: 0, pr: 0 }}>
            Log in instead
          </Button>
          <Button type="submit" variant="contained" disabled={isLoading}>
            Send link
          </Button>
        </Box>
      </Box>
    </FormTemplate>
  );
};

export default ForgotPassword;
