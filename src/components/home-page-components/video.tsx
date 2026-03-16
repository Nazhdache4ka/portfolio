import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function Video() {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        marginBottom: '5rem',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <video
          src={'../../assets/videos/home-page.mp4'}
          autoPlay
          loop
          muted
        />
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ textAlign: 'center', color: 'white', padding: 8, borderBottom: '2px solid white' }}
          >
            Welcome to my final project web page
          </Typography>
          <Button
            component={Link}
            to="/about"
            variant="contained"
            sx={{
              color: 'white',
              marginTop: '10rem',
              padding: '.5rem 1rem',
              border: '3px solid white',
              borderRadius: 10,
            }}
          >
            Get to know me
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
