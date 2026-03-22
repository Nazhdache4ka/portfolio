import { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Chip,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import aboutMeCardImg from '../../../assets/photos/about-me-card-img.jpg';

export function BriefContent() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mt: '5rem', width: '80%', height: '30rem', mx: 'auto' }}>
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary.main"
        sx={{ textAlign: 'center', mb: '2rem' }}
      >
        Brief content
      </Typography>

      <Box sx={{ width: '100%', bgcolor: 'divider', borderRadius: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="About me" />
          <Tab label="My projects" />
          <Tab label="Page core technologies" />
        </Tabs>
      </Box>

      <AboutMe
        value={value}
        index={0}
      />
      <MyProjects
        value={value}
        index={1}
      />
      <Technologies
        value={value}
        index={2}
      />
    </Box>
  );
}

interface TabItemProps {
  value: number;
  index: number;
}

function AboutMe({ value, index }: TabItemProps) {
  if (value !== index) return null;

  return (
    <Card sx={{ mt: 3, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <CardMedia
        component="img"
        image={aboutMeCardImg}
        alt="About me"
        sx={{
          width: { xs: '100%', md: '35%' },
          maxHeight: 260,
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
          >
            A few words about me
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
          >
            Brief description of me: where I'm from, my interests and hobbies, some fun facts and details and my goals
            in the future. On the following page you can find more personal info and stories.
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: 'auto', justifyContent: 'flex-end' }}>
          <Button
            component={Link}
            to="/about"
            size="small"
            variant="contained"
          >
            Learn more
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

function MyProjects({ value, index }: TabItemProps) {
  if (value !== index) return null;

  return (
    <Card sx={{ mt: 3, position: 'relative' }}>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
        >
          What you'll find on the Projects page
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
        >
          The Projects page contains a selection of my recent work: small training apps, pet projects and pieces from
          this course. For each project there is a short description, stack and a link to the repo or live demo.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          Highlights:
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
        >
          <Chip
            label="React"
            color="primary"
            variant="outlined"
          />
          <Chip
            label="TypeScript"
            color="primary"
            variant="outlined"
          />
          <Chip
            label="MUI"
            color="primary"
            variant="outlined"
          />
          <Chip
            label="Fullstack development"
            color="primary"
            variant="outlined"
          />
          <Chip
            label="Routing"
            variant="outlined"
          />
          <Chip
            label="API integration"
            variant="outlined"
          />
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', position: 'absolute', bottom: 0, right: 0 }}>
        <Button
          component={Link}
          to="/projects"
          size="small"
          variant="contained"
        >
          Go to projects
        </Button>
      </CardActions>
    </Card>
  );
}

function Technologies({ value, index }: TabItemProps) {
  if (value !== index) return null;

  return (
    <Card sx={{ mt: 3, position: 'relative' }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Core technologies of this project
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body2">
            • <strong>React + React Router</strong> — components and routing with Layout and Outlet.
          </Typography>
          <Typography variant="body2">
            • <strong>TypeScript</strong> — type-safe components and props, convenient code navigation.
          </Typography>
          <Typography variant="body2">
            • <strong>MUI</strong> — fast interface building from ready-made components with theme and adaptivity.
          </Typography>
          <Typography variant="body2">
            • <strong>Vite</strong> — bundler for fast development and production build.
          </Typography>
        </Stack>
        <CardActions sx={{ position: 'absolute', bottom: 0, right: 0 }}>
          <Button
            component={Link}
            to="/technologies"
            size="small"
            variant="contained"
          >
            Go to technologies
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
