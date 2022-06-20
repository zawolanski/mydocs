import { alpha, Box, IconButton, Typography } from '@mui/material';
import { Article, MoreVert, Group } from '@mui/icons-material';

import { Document } from '@/types/models/document';
import { transformUpdatedDate } from '@/helpers/transformLastOpenedDate';
import { useTranslation } from 'react-i18next';

interface Props {
  document: Document;
  isSingle: boolean;
}
const DocumentBar = ({ document, isSingle }: Props) => {
  const [t] = useTranslation('document');

  return (
    <Box
      role="option"
      component="div"
      display="grid"
      gridTemplateColumns="3rem auto"
      height="3rem"
      alignItems="center"
      gap="0.5rem"
      borderRadius="3rem"
      sx={{
        ':hover': { background: ({ palette }) => alpha(palette.primary.light, 0.15), outline: '1px solid #F8F8F8' },
        cursor: 'pointer',
      }}
    >
      <Article color="primary" sx={{ justifySelf: 'center' }} />
      <Box
        display="grid"
        gridTemplateColumns="auto calc((100% + 3rem) * 0.15) calc((100% + 3rem) * 0.15) 3rem"
        gap="0.5rem"
        alignItems="center"
        boxSizing="border-box"
        height="100%"
        borderBottom={({ palette }) => `1px solid ${isSingle ? 'transparent' : palette.divider}`}
        sx={{ ':hover': { borderColor: 'transparent' } }}
      >
        <Box display="flex" alignItems="center">
          <Typography noWrap letterSpacing="0.025rem" variant="body2" mr="0.35rem">
            {document.name}
          </Typography>
          {document.invitedUsers.length > 0 ? <Group fontSize="small" titleAccess={t('sharedInfo')} /> : null}
        </Box>
        <Box>
          <Typography noWrap variant="body2" sx={{ color: (theme) => theme.palette.text.secondary }}>
            {document.ownerName}
          </Typography>
        </Box>
        <Box>
          <Typography noWrap variant="body2" sx={{ color: (theme) => theme.palette.text.secondary }}>
            {transformUpdatedDate(document.updatedAt)}
          </Typography>
        </Box>
        <IconButton sx={{ width: '2.5rem' }}>
          <MoreVert />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DocumentBar;
