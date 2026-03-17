import { AboutCards } from '../components';
import { Container, Typography } from '@mui/material';

export function About() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary.main"
        sx={{ textAlign: 'center', my: 2 }}
      >
        A few words about me
      </Typography>
      <AboutCards />
    </Container>
  );
}
