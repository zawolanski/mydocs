import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, onSnapshot, query, Unsubscribe, where } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';

import { db } from '@/firebase.config';
import { Document } from '@/types/models/document';
import AppBar from '@components/AppBar/';

const Documents = () => {
  const [documents, setDocuments] = useState<Document[] | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [t] = useTranslation(['signin', 'common']);

  useEffect(() => {
    let unsub: Unsubscribe;
    const auth = getAuth();
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
  }, [enqueueSnackbar, t]);

  return (
    <>
      <div>
        <AppBar />
        <Box sx={{ pt: 10 }}>
          <Typography>Documents</Typography>
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
    </>
  );
};

export default Documents;
