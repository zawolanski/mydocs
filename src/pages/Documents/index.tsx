import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, onSnapshot, Unsubscribe } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import _ from 'lodash';

import { db } from '@/firebase.config';
import { Document } from '@/types/models/document';
import AppBar from '@components/AppBar/';
import DocumentBar from '@components/DocumentBar';
import { User } from '@/types/models/user';
import { getInvitedDocQuery, getOwnerDocQuery } from '@/firebase/queries';

const Documents = () => {
  const [documents, setDocuments] = useState<Document[] | null>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [t] = useTranslation(['signin', 'common']);

  useEffect(() => {
    let unsubOwner: Unsubscribe;
    let unsubNotOwner: Unsubscribe;
    const auth = getAuth();
    const uid = auth.currentUser?.uid;

    if (uid) {
      try {
        let docs: Document[] = [];
        unsubOwner = onSnapshot(getOwnerDocQuery(uid), async (querySnapshot) => {
          querySnapshot.forEach(async (document) =>
            docs.push({ ...document.data(), id: document.id, ownerName: 'me' } as Document)
          );
          setDocuments(docs);
        });

        unsubNotOwner = onSnapshot(getInvitedDocQuery(uid), async (querySnapshot) => {
          querySnapshot.forEach(async (document) =>
            docs.push({ ...document.data(), id: document.id, ownerName: '' } as Document)
          );
          if (docs.length > 0) {
            docs = await Promise.all(
              docs.map(async (document) => {
                if (document.ownerName === 'me') return document;
                const docSnap = await getDoc(doc(db, 'users', document.owner));
                const data = docSnap.data() as User;
                return { ...document, ownerName: `${_.capitalize(data.firstname)} ${_.capitalize(data.lastname)}` };
              })
            );
          }
          docs = _.orderBy(docs, (document) => document.updatedAt.toDate(), 'desc');
          setDocuments(docs);
        });
      } catch (e) {
        enqueueSnackbar(t('notification.error'), { variant: 'error' });
      }
    }

    return () => {
      unsubOwner();
      unsubNotOwner();
    };
  }, [enqueueSnackbar, t]);

  return (
    <>
      <div>
        <AppBar />
        <Box
          sx={{ pt: 10, m: '0 auto', userSelect: 'none', pb: '1.5rem' }}
          width="100%"
          maxWidth="1000px"
          role="listbox"
          component="div"
          tabIndex={0}
        >
          {documents && documents.length > 0 ? (
            documents.map((document) => (
              <DocumentBar key={document.id} document={document} isSingle={documents.length === 1} />
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
