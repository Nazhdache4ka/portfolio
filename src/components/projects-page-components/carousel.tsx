import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Tooltip,
  Container,
  Stack,
  Chip,
} from '@mui/material';
import { ArrowButtonLeft, ArrowButtonRight } from './arrow-buttons';
import { BottomIndicator } from './bottom-indicator';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MediaType, type IProject } from '../../interfaces';
import styles from './styles/carousel.module.css';
import project1 from '../../../assets/photos/project1.jpg';
import chessWebMov from '../../../assets/videos/chess-web.mov';
import chessNativeMp4 from '../../../assets/videos/chess-native.mp4';
import chessNative2Mp4 from '../../../assets/videos/chess-native2.mp4';
import fullstack4Mov from '../../../assets/videos/fullstack4.mov';
import fullstack1Mov from '../../../assets/videos/fullstack1.mov';
import fullstack2Mov from '../../../assets/videos/fullstack2.mov';
import fullstack3Mov from '../../../assets/videos/fullstack3.mov';
import fullstackBdPng from '../../../assets/photos/fullstack-bd.png';

export function Carousel() {
  const [index, setIndex] = useState<number>(0);
  const [innerIndex, setInnerIndex] = useState<number>(0);

  const handleInnerPrevious = () => {
    if (innerIndex === 0) {
      setInnerIndex(projects[index].media.length - 1);
      return;
    }
    setInnerIndex((i) => i - 1);
  };

  const handleInnerNext = () => {
    if (innerIndex === projects[index].media.length - 1) {
      setInnerIndex(0);
      return;
    }
    setInnerIndex((i) => i + 1);
  };

  const handlePrevious = () => {
    setInnerIndex(0);
    if (index === 0) {
      setIndex(projects.length - 1);
      return;
    }
    setIndex((i) => i - 1);
  };

  const handleNext = () => {
    setInnerIndex(0);
    if (index === projects.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((i) => i + 1);
  };

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary.main"
        sx={{ textAlign: 'center', my: 2 }}
      >
        Projects Review
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <ArrowButtonLeft
          onClick={handlePrevious}
          color="primary"
        />

        <Box
          sx={{ flex: '1 1 0', minWidth: 0 }}
          className={styles.viewport}
        >
          <Box
            className={styles.track}
            sx={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <Box
                key={i}
                className={styles.slide}
              >
                <Card sx={{ height: '100%' }}>
                  <Box className={styles.innerViewport}>
                    <ArrowButtonLeft
                      onClick={handleInnerPrevious}
                      color="secondary"
                      sxProps={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                      }}
                    />

                    <Box
                      sx={{ transform: `translateX(-${innerIndex * 100}%)` }}
                      className={styles.innerTrack}
                    >
                      {project.media.map((media, i) =>
                        media.type === MediaType.IMG ? (
                          <CardMedia
                            key={i}
                            className={styles.innerSlide}
                            component={media.type}
                            image={media.url}
                            alt={`Project ${innerIndex + 1}`}
                            sx={{ height: 500, objectFit: 'contain', p: 2 }}
                          />
                        ) : (
                          <CardMedia
                            key={i}
                            className={styles.innerSlide}
                            component={media.type}
                            src={media.url}
                            autoPlay
                            loop
                            muted
                            sx={{ height: 500, objectFit: 'contain', p: 2 }}
                          />
                        )
                      )}
                    </Box>

                    <BottomIndicator
                      project={project}
                      innerIndex={innerIndex}
                    />

                    <ArrowButtonRight
                      onClick={handleInnerNext}
                      color="secondary"
                      sxProps={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mt: 2 }}
                    >
                      {project.stack.map((stack, i) => (
                        <Chip
                          key={i}
                          label={stack}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Tooltip title="GitHub repository">
                      <IconButton
                        component="a"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        <ArrowButtonRight
          onClick={handleNext}
          color="primary"
        />
      </Box>
    </Container>
  );
}

const projects: IProject[] = [
  {
    media: [
      {
        url: project1,
        type: MediaType.IMG,
      },
      {
        url: chessWebMov,
        type: MediaType.VIDEO,
      },
    ],
    title: 'Chess (Web)',
    description:
      'First iteration of the chess project, with a strong focus on domain logic and a polished web UX. No external chess library — a custom rules engine (per-piece move logic, castling, promotion, check and checkmate) keeps the domain explicit and testable; piece models and board utils stay separate from the UI, which gives clear boundaries and easier changes. React 19, TypeScript, Vite; Chakra UI for layout and theming; Framer Motion for move and UI animations; Lottie for feedback; dnd-kit for accessible drag-and-drop. Game phase and board state in React context; custom timer hook; promotion via modal.',
    link: 'https://github.com/Nazhdache4ka/chess',
    stack: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Lottie', 'dnd-kit'],
  },
  {
    media: [
      {
        url: chessNativeMp4,
        type: MediaType.VIDEO,
      },
      {
        url: chessNative2Mp4,
        type: MediaType.VIDEO,
      },
    ],
    title: 'Chess (Mobile)',
    description:
      'Second iteration of the chess project, with a strong focus on modern architecture and cross-platform delivery. One codebase (Expo / React Native) for iOS, Android, and web. Feature-Sliced Design: app (routing, screens), pages (Single Player, AI), features (game-board, game-settings), entities (board, cell, pieces), shared (chess logic, store). Layered structure and clear boundaries yield high cohesion and low coupling, easier testing and maintenance. Same validation and move logic reused in both play modes. AI mode via OpenAI API with a dedicated prompt and session; Zustand for state; Lottie and expo-haptics for feedback.',
    link: 'https://github.com/Nazhdache4ka/chess-react-native',
    stack: [
      'React',
      'TypeScript',
      'Expo',
      'React Native',
      'Feature-Sliced Design',
      'Zustand',
      'Lottie',
      'expo-haptics',
    ],
  },
  {
    media: [
      {
        url: fullstack4Mov,
        type: MediaType.VIDEO,
      },
      {
        url: fullstack1Mov,
        type: MediaType.VIDEO,
      },
      {
        url: fullstack2Mov,
        type: MediaType.VIDEO,
      },
      {
        url: fullstack3Mov,
        type: MediaType.VIDEO,
      },
      {
        url: fullstackBdPng,
        type: MediaType.IMG,
      },
    ],
    title: 'Blog API + Admin',
    description:
      'Fullstack CRUD project with authorization, authentication and admin panel. Monorepo: Express 5 API and React SPA. Backend: JWT access and refresh (httpOnly cookie); auth and admin middleware for protected and role-based routes (user/admin), so security is centralized and easy to reason about. MariaDB via connection pool, no ORM — manual SQL and schema. Dividing backend into controllers and services for each entity. Express-validator and bcrypt for input and passwords. Frontend: TanStack Query for all API calls — typed hooks, caching and refetch; Zustand global store for auth and tokens; MUI for layout and admin. Protected routes on the client are enforced via an Axios interceptor.',
    link: 'https://github.com/Nazhdache4ka/fullstack-auth-roles',
    stack: ['React', 'TypeScript', 'TanStack Query', 'Zustand', 'MUI', 'Express', 'MariaDB', 'JWT'],
  },
];
