import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { Description } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { getAuth, User } from 'firebase/auth';

import SignOut from '@components/SignOut';

const Documents = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [initials, setInitials] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth();
    if (auth.currentUser?.displayName) {
      const splitedName = auth.currentUser?.displayName.split(' ');
      if (splitedName.length > 0)
        setInitials(`${splitedName[0][0]}${splitedName.length > 1 ? splitedName[1][0] : splitedName[1][1]}`);
    }
    setCurrentUser(auth.currentUser);
  }, []);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack spacing={1} direction="row" alignItems="center" width="100%">
            <Stack spacing={1} direction="row" alignItems="center" width="33.33%">
              <Description fontSize="large" />
              <Typography variant="h5" component="h1">
                My docs
              </Typography>
            </Stack>
            <Box width="33.33%" />
            <Box width="33.33%" display="flex" justifyContent="flex-end">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt={currentUser?.displayName || ''} src={currentUser?.photoURL || ''}>
                  {initials}
                </Avatar>
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ pt: 10 }}>
        <Typography>Documents</Typography>
        <SignOut />
      </Box>
    </div>
  );
};

export default Documents;
