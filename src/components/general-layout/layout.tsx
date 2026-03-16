import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Header } from './header';
import { Footer } from './footer';

export function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
