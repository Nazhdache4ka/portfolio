import { Link, useLocation } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { LottieLogo } from './lottie';

const activeNavStyle = { opacity: 1 };
const inactiveNavStyle = { opacity: 0.7 };

export function Header() {
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{ padding: 1 }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
          <Box sx={{ width: 80, height: 80 }}>
            <LottieLogo />
          </Box>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            Final Project
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={location.pathname === '/' ? activeNavStyle : inactiveNavStyle}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/projects"
            sx={location.pathname === '/projects' ? activeNavStyle : inactiveNavStyle}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={location.pathname === '/about' ? activeNavStyle : inactiveNavStyle}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/technologies"
            sx={location.pathname === '/technologies' ? activeNavStyle : inactiveNavStyle}
          >
            Page stack
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
