import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { ExitToApp as LogoutIcon } from '@mui/icons-material';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { colors } from '../styles/theme';
import useAuth from '../hooks/useAuth';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return <>{children}</>;
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${colors.tofu}, ${colors.fuji}20)`,
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${colors.stone}20`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: colors.ink,
                fontWeight: 500,
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            >
              Journal
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/journal/new')}
              sx={{
                mr: 2,
                background: `linear-gradient(45deg, ${colors.ink}, ${colors.maple})`,
                color: 'white',
              }}
            >
              New Entry
            </Button>
            <IconButton
              onClick={handleLogout}
              sx={{
                color: colors.stone,
                '&:hover': {
                  color: colors.ink,
                },
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </Box>
  );
};

export default Layout; 