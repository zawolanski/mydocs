import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';

import { theme } from '@/theme/mui';

interface MainTemplateProps {
  children: ReactNode;
}
const MainTemplate = ({ children }: MainTemplateProps) => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider
      variant="success"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      {children}
    </SnackbarProvider>
  </ThemeProvider>
);

export default MainTemplate;
