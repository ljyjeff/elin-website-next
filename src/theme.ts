'use client';
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      dark: '#85465A',
      main: '#CB7C95',
      light: '#F4E7EC'
    }
  },
  typography: {
    fontFamily: 'var(--font-space-mono)',
    h6: {
      color: '#CB7C95',
      fontWeight: 700
    },
    body1: {
      color: '#CB7C95'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          backgroundColor: '#fcf7f9',
          '&:hover': {
            backgroundColor: '#F4E7EC',
          },
        }),
      },
    },
  },
});

const shadows = theme.shadows;
shadows[3] = `
  0px 3px 3px -2px rgba(203, 124, 149, 0.2),
  0px 3px 4px 0px rgba(203, 124, 149, 0.14), 
  0px 1px 8px 0px rgba(203, 124, 149, 0.12)`;
theme = createTheme(theme, { shadows });

export default theme;
