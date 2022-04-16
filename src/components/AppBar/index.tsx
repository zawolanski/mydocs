import { Description } from '@mui/icons-material';
import { Toolbar, AppBar as MUIAppBar, Stack, Typography, Box, IconButton, Avatar } from '@mui/material';
import { getAuth, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import ToolbarMenu from '@components/ToolbarMenu/';
import { getInitials } from '@/helpers/getInitials';

const AppBar = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [initials, setInitials] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const auth = getAuth();
    if (auth.currentUser?.displayName) setInitials(getInitials(auth.currentUser?.displayName));
    setCurrentUser(auth.currentUser);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MUIAppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          background: (theme) => theme.palette.common.white,
          color: (theme) => theme.palette.text.secondary,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack spacing={1} direction="row" alignItems="center" width="100%">
            <Stack spacing={0.25} direction="row" alignItems="center" width="33.33%">
              <Description fontSize="large" color="primary" />
              <Typography variant="h5" component="h1">
                My Docs
              </Typography>
            </Stack>
            <Box width="33.33%" />
            <Box width="33.33%" display="flex" justifyContent="flex-end">
              <IconButton sx={{ p: 0 }} onClick={handleClick}>
                <Avatar
                  alt={currentUser?.displayName || ''}
                  src={currentUser?.photoURL || ''}
                  sx={{
                    width: '2rem',
                    height: '2rem',
                    fontSize: '1rem',
                    lineHeight: '2rem',
                    alignItems: 'center',
                  }}
                >
                  {initials}
                </Avatar>
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>
      </MUIAppBar>
      <ToolbarMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
};

export default AppBar;
