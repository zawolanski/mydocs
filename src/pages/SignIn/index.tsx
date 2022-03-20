import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  LinearProgress,
  TextField,
  Typography,
  Link as MuiLink,
} from '@mui/material';

import GoogleAuth from '@components/GoogleAuth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);

      const { user } = userCredentials;

      navigate('/documents');
      console.log(user);
      return;
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ maxWidth: { xs: '100%', sm: '450px' }, width: '100%', p: 2 }}>
        <Box
          sx={{
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'relative',
            border: (theme) => ({ sm: `1px solid ${theme.palette.grey['300']}` }),
            maxWidth: { xs: '100%', sm: '450px' },
            width: '100%',
            p: 5,
            borderRadius: (theme) =>
              typeof theme.shape.borderRadius === 'string'
                ? parseInt(theme.shape.borderRadius, 10) / 2
                : theme.shape.borderRadius / 2,
          }}
        >
          {isLoading ? <LinearProgress sx={{ width: '100%', position: 'absolute', top: 0, left: 0 }} /> : null}
          {isLoading ? (
            <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, opacity: 0.5, position: 'absolute', zIndex: 2 }} />
          ) : null}
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
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <MuiLink
            variant="body2"
            underline="none"
            component={Link}
            to="/signup"
            sx={{ mt: 1.75, color: 'text.primary' }}
          >
            Create account?
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
