import { createTheme } from '@mui/material/styles';

export const colors = {
  sakura: '#FFB7C5', // Soft pink
  matcha: '#D4E9D7', // Soft green
  fuji: '#E6E6FA', // Soft purple
  tofu: '#F5F5F5', // Off white
  ink: '#2C3E50', // Dark blue-gray
  bamboo: '#90A878', // Muted green
  maple: '#E94E77', // Accent pink
  ocean: '#5D9CEC', // Bright blue
  stone: '#7F8C8D', // Medium gray
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.ink,
      light: colors.fuji,
    },
    secondary: {
      main: colors.maple,
      light: colors.sakura,
    },
    background: {
      default: colors.tofu,
      paper: '#FFFFFF',
    },
    text: {
      primary: colors.ink,
      secondary: colors.stone,
    },
  },
  typography: {
    fontFamily: "'Noto Sans JP', 'Roboto', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0.01em',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  },
});

export default theme; 