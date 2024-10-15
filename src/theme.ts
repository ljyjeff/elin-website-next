'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#A13657',
      main: '#CB7C95',
      light: '#E1D6D9'
    }
  },
  typography: {
    fontFamily: 'var(--font-space-mono)',
    h5: {
      color: '#CB7C95',
      fontWeight: 700
    },
    body1 : {
      color: '#CB7C95'
    }
  },
});

export default theme;
