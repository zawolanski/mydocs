import { alpha, Box, IconButton, Stack, Typography } from '@mui/material';
import { Article, MoreVert } from '@mui/icons-material';

import { Document } from '@/types/models/document';
import { transformLastOpenedData } from '@/helpers/transformLastOpenedDate';

interface Props {
  document: Document;
  isSingle: boolean;
}
const DocumentBar = ({ document, isSingle }: Props) => (
  <Box role="option" component="div">
    <Stack
      direction="row"
      alignItems="center"
      height="3rem"
      borderRadius="3rem"
      sx={{
        ':hover': { background: ({ palette }) => alpha(palette.primary.light, 0.15), outline: '1px solid #F8F8F8' },
        cursor: 'pointer',
      }}
    >
      <Box
        width="2.25rem"
        height="100%"
        display="flex"
        alignItems="center"
        borderBottom="1px solid transparent"
        boxSizing="border-box"
        m="0 1rem"
      >
        <Article color="primary" />
      </Box>
      <Stack
        direction="row"
        spacing={1.5}
        width="100%"
        height="3rem"
        alignItems="center"
        boxSizing="border-box"
        borderBottom={({ palette }) => `1px solid ${isSingle ? 'transparent' : palette.divider}`}
        sx={{ ':hover': { borderColor: 'transparent' } }}
      >
        <Box flexGrow="1">
          <Typography noWrap fontWeight="500" letterSpacing="0.025rem" variant="body2">
            {document.name}
          </Typography>
        </Box>
        <Box width="15%">
          <Typography noWrap variant="body2" sx={{ color: (theme) => theme.palette.text.secondary }}>
            {document.owner}
          </Typography>
        </Box>
        <Box width="15%">
          <Typography variant="body2" sx={{ color: (theme) => theme.palette.text.secondary }}>
            {transformLastOpenedData(document.lastOpenedByOwner)}
          </Typography>
        </Box>
        <IconButton sx={{ mr: '0.25rem !important', height: '2.5rem', width: '2.5rem' }}>
          <MoreVert />
        </IconButton>
      </Stack>
    </Stack>
  </Box>
);

export default DocumentBar;
