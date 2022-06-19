import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Checkbox, Divider, FormControlLabel, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';

import FormTemplate from '@templates/Form';
import GoogleAuth from '@components/GoogleAuth';
import { writeUserData } from '@/helpers/writeData/writeUserData';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [t] = useTranslation(['signup', 'common']);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

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
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

      const { user } = userCredentials;

      await updateProfile(user, { displayName: `${firstname} ${lastname}` });

      await writeUserData({ id: user.uid, email, firstname, lastname });

      navigate('/documents');
      return;
    } catch (error) {
      enqueueSnackbar(t('notification.error'), { variant: 'error' });
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '90%', mb: 1.5 }}>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <TextField
              label={t('controls.firstname.label', { ns: 'common' })}
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
              label={t('controls.lastname.label', { ns: 'common' })}
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Box>
          <TextField
            label={t('controls.email.label', { ns: 'common' })}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box sx={{ width: '100%' }}>
            <TextField
              sx={{ width: '100%' }}
              label={t('controls.password.label', { ns: 'common' })}
              type={showPassword ? 'text' : 'password'}
              name="password"
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
          <Button component={Link} to="/signin" sx={{ mt: 0.75, pl: 0, pr: 0 }}>
            {t('signInButton')}
          </Button>
          <Button type="submit" variant="contained" disabled={isLoading}>
            {t('signUpButton')}
          </Button>
        </Box>
      </Box>
    </FormTemplate>
  );
};

export default SignUp;
