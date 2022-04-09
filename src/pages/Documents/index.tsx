import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { Description } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { getAuth, User } from 'firebase/auth';
import { collection, onSnapshot, query, Unsubscribe, where } from 'firebase/firestore';

import SignOut from '@components/SignOut';
import { db } from '@/firebase.config';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { Document } from '@/types/models/document';

const Documents = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [initials, setInitials] = useState<string | null>(null);
  const [documents, setDocuments] = useState<Document[] | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [t] = useTranslation(['signin', 'common']);

  useEffect(() => {
    let unsub: Unsubscribe;
    const auth = getAuth();
    if (auth.currentUser?.displayName) {
      const splitedName = auth.currentUser?.displayName.split(' ');
      if (splitedName.length > 0)
        setInitials(`${splitedName[0][0]}${splitedName.length > 1 ? splitedName[1][0] : splitedName[1][1]}`);
    }
    setCurrentUser(auth.currentUser);

    const uid = auth.currentUser?.uid;

    if (uid) {
      try {
        const q = query(collection(db, 'documents'), where('owner', '==', uid));
        unsub = onSnapshot(q, (querySnapshot) => {
          const docs: Document[] = [];
          querySnapshot.forEach((document) => docs.push({ ...document.data(), id: document.id } as Document));
          setDocuments(docs);
        });
      } catch (e) {
        enqueueSnackbar(t('notification.error'), { variant: 'error' });
      }
    }

    return () => unsub();
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
        {documents && documents.length > 0 ? (
          documents.map((doc) => (
            <div>
              <p>{doc.id}</p>
              <p>{doc.name}</p>
              <p>{doc.access}</p>
            </div>
          ))
        ) : (
          <p>There are no documents</p>
        )}
      </Box>
    </div>
  );
};

export default Documents;
