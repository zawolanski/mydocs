import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, onSnapshot, query, Unsubscribe, where } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';

import { db } from '@/firebase.config';
import { Document } from '@/types/models/document';
import AppBar from '@components/AppBar/';
import DocumentBar from '@components/DocumentBar';

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
        <Box
          sx={{ pt: 10, m: '0 auto', userSelect: 'none' }}
          width="100%"
          maxWidth="1000px"
          role="listbox"
          component="div"
          tabIndex={0}
        >
          {/* {documents && documents.length > 0 ? (
            documents.map((doc) => <DocumentBar key={doc.id} document={doc} isSingle={documents.length === 1} />)
          ) : (
            <p>There are no documents</p>
          )} */}
          {documents && documents.length > 0 ? (
            <>
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
              <DocumentBar document={documents[0]} isSingle={documents.length === 1} />
            </>
          ) : (
            <p>There are no documents</p>
          )}
        </Box>
      </div>
    </>
  );
};

export default Documents;
