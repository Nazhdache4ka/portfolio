import { Container, Stack, Typography, Button, Card, CardActions, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export function Error() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        color="primary.main"
        fontWeight={700}
        sx={{ textAlign: 'center', my: 2 }}
      >
        Oops... Looks like this page does not exist
      </Typography>
      <Typography
        variant="h6"
        color="primary.main"
        fontWeight={700}
        sx={{ textAlign: 'center', my: 2 }}
      >
        You can check out other pages!
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{ flex: 1 }}
        >
          <Card>
            <CardMedia
              component="img"
              image="../../assets/photos/home.jpg"
              alt="Home page preview"
              sx={{ width: '100%', maxHeight: 280, objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6">Home page</Typography>
            </CardContent>
            <CardActions>
              <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
              >
                Go to Home
              </Button>
            </CardActions>
          </Card>

          <Card>
            <CardMedia
              component="img"
              image="../../assets/photos/project.jpg"
              alt="Projects page preview"
              sx={{ width: '100%', maxHeight: 280, objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6">Projects page with explanations and examples</Typography>
            </CardContent>
            <CardActions>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                color="primary"
              >
                Go to Projects
              </Button>
            </CardActions>
          </Card>
        </Stack>

        <Stack
          direction="column"
          spacing={2}
          sx={{ flex: 1 }}
        >
          <Card>
            <CardMedia
              component="img"
              image="../../assets/photos/about.jpg"
              alt="About page preview"
              sx={{ width: '100%', maxHeight: 280, objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6">About me page</Typography>
            </CardContent>
            <CardActions>
              <Button
                component={Link}
                to="/about"
                variant="contained"
                color="primary"
              >
                Go to About
              </Button>
            </CardActions>
          </Card>

          <Card>
            <CardMedia
              component="img"
              image="../../assets/photos/stack.jpg"
              alt="Technologies page preview"
              sx={{ width: '100%', maxHeight: 280, objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6">Stack for this project</Typography>
            </CardContent>
            <CardActions>
              <Button
                component={Link}
                to="/technologies"
                variant="contained"
                color="primary"
              >
                Go to Technologies
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}
