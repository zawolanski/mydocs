import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';

const DocumentBarsLabel = () => {
  const [t] = useTranslation('document');

  return (
    <Box
      m="0.5rem 0 0.75rem"
      display="grid"
      gridTemplateColumns="3rem auto 15% 15% 3rem"
      height="3rem"
      alignItems="center"
      gap="0.5rem"
    >
      <div />
      <Box>
        <Typography noWrap fontWeight="600" letterSpacing="0.025rem" variant="body2">
          {t('labels.documentName')}
        </Typography>
      </Box>
      <Box>
        <Typography noWrap fontWeight="600" variant="body2">
          {t('labels.owned')}
        </Typography>
      </Box>
      <Box>
        <Typography fontWeight="600" variant="body2">
          {t('labels.lastUpdate')}
        </Typography>
      </Box>
    </Box>
  );
};

export default DocumentBarsLabel;
