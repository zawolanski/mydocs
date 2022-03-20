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

      enqueueSnackbar('You were succesfully logged in');
      navigate('/documents');
    } catch (error) {
      enqueueSnackbar('An error occured while logging in', { variant: 'error' });
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
          Create account
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
      >
        <Typography variant="h6" sx={{ mb: 1.25 }}>
          Sign in
        </Typography>
        <Typography variant="body2" sx={{ mb: 2.25 }}>
          Use your email and password
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '90%', mb: 1.5 }}>
          <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Box sx={{ width: '100%' }}>
            <TextField
              sx={{ width: '100%' }}
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox onChange={() => setShowPassword((prevState) => !prevState)} />}
              label="Show password"
            />
          </Box>
        </Box>
        <Divider sx={{ mb: 2 }}>or</Divider>
        <GoogleAuth handlePopupOpen={handlePopupOpen} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
          <Button component={Link} to="/forgot-password" sx={{ mt: 0.75, pl: 0, pr: 0 }}>
            Forgot password?
          </Button>
          <Button type="submit" variant="contained" disabled={isLoading}>
            Sign in
          </Button>
        </Box>
      </Box>
    </FormTemplate>
  );
};

export default SignIn;
