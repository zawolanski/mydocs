import { Box, LinearProgress } from '@mui/material';
import { ReactNode } from 'react';

interface FormTemplateProps {
  children: ReactNode;
  isLoading: boolean;
  additionalContent?: ReactNode;
}
const FormTemplate = ({ children, isLoading, additionalContent = null }: FormTemplateProps) => (
  <Box
    sx={{
      minHeight: { xs: 'auto', sm: '100vh' },
      display: 'flex',
      justifyContent: { xs: 'flex-start', sm: 'center' },
      alignItems: 'center',
      boxSizing: 'border-box',
      overflow: 'auto',
    }}
  >
    <Box
      sx={{
        maxWidth: { xs: '100%', sm: '450px' },
        width: '100%',
        p: { xs: 0, sm: 2 },
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        height: { xs: '100%', sm: 'auto' },
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          overflowX: 'hidden',
          overflowY: 'auto',
          position: 'relative',
          border: (theme) => ({ sm: `1px solid ${theme.palette.grey['300']}` }),
          maxWidth: { xs: '100%', sm: '450px' },
          width: '100%',
          p: { xs: 1, sm: 5 },
          pb: { xs: 5 },
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
        {children}
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          p: { xs: 2, sm: 0 },
          boxSizing: 'border-box',
          bottom: 0,
          left: 0,
          position: { xs: 'fixed', sm: 'static' },
        }}
      >
        {additionalContent}
      </Box>
    </Box>
  </Box>
);

export default FormTemplate;
