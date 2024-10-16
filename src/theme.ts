'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    body1 : {
      color: '#CB7C95'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: () => ({
          '&:hover': {
            backgroundColor: '#F4E7EC',
          },
        }),
      },
    },
  },
});

export default theme;
