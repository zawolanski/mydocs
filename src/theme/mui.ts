import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#7C5DFA',
    },
    secondary: {
      main: '#7C5DFA',
    },
    background: {
      default: '#F8F8FB',
    },
    error: {
      main: '#EC5757',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});
