import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@/theme/mui';

interface MainTemplateProps {
  children: ReactNode;
}
const MainTemplate = ({ children }: MainTemplateProps) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default MainTemplate;
