import { Container, Typography, Card, CardContent, Box } from '@mui/material';
import { LottieAnimation } from './lottie-animation';
import reactLogo from './assets/react-logo.json';
import typescriptLogo from './assets/typescript.json';
import navLogo from './assets/nav.json';
import designLogo from './assets/design.json';

export function CodeExamples() {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ mb: 2 }}
      >
        Code examples from this project
      </Typography>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{ mb: 1 }}
          >
            React state and event handlers
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 1 }}
          >
            The projects carousel uses React state and event handlers to switch between projects and media inside each
            project. When the state changes, React automatically re-renders the JSX below, so the visible content
            updates without manual DOM work.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="pre"
              sx={{
                flexGrow: 1,
                textAlign: 'left',
                bgcolor: 'black',
                color: 'white',
                p: 2,
                borderRadius: 1,
                fontSize: 12,
                overflowX: 'auto',
              }}
            >
              <code>{`const [index, setIndex] = useState(0);
const [innerIndex, setInnerIndex] = useState(0);

const handlePrevious = () => {
  setInnerIndex(0);
  setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
};

const handleNext = () => {
  setInnerIndex(0);
  setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
};

return (
  <Box className={styles.viewport}>
    <Box
      className={styles.track}
      sx={{ transform: \`translateX(-\${index * 100}%)\` }}
    >
      {projects.map((project) => (
        <ProjectSlide
          key={project.title}
          project={project}
          innerIndex={innerIndex}
        />
      ))}
    </Box>
  </Box>
);`}</code>
            </Box>
            <Box sx={{ width: 220, minWidth: 160 }}>
              <LottieAnimation animationData={reactLogo} />
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{ mb: 1 }}
          >
            TypeScript interfaces for typed data
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 1 }}
          >
            Example of how TypeScript structures are used in the project. <code>{`const obj = { ... } as const`}</code>{' '}
            construction for creating enum-like structure, interfaces for strongly typed data in arrays and objects.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="pre"
              sx={{
                flexGrow: 1,
                textAlign: 'left',
                bgcolor: 'black',
                color: 'white',
                p: 2,
                borderRadius: 1,
                fontSize: 12,
                overflowX: 'auto',
              }}
            >
              <code>{`export const MediaType = {
  IMG: 'img',
  VIDEO: 'video',
} as const;

export type MediaType = (typeof MediaType)[keyof typeof MediaType];

export interface IMedia {
  url: string;
  type: MediaType;
}

export interface IProject {
  media: IMedia[];
  title: string;
  description: string;
  link: string;
  stack: string[];
}

export const rowDirection = {
  ROW: 'row',
  ROW_REVERSE: 'row-reverse',
} as const;

export type RowDirection = (typeof rowDirection)[keyof typeof rowDirection];

export interface ICard {
  title: string;
  content: string;
  rowDirection: RowDirection;
  image: string;
}`}</code>
            </Box>
            <Box sx={{ width: 220, minWidth: 160 }}>
              <LottieAnimation animationData={typescriptLogo} />
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{ mb: 1 }}
          >
            Routing with React Router
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 1 }}
          >
            The application defines nested routes so that all pages share a common layout.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="pre"
              sx={{
                flexGrow: 1,
                textAlign: 'left',
                bgcolor: 'black',
                color: 'white',
                p: 2,
                borderRadius: 1,
                fontSize: 12,
                overflowX: 'auto',
              }}
            >
              <code>{`function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="technologies" element={<Technologies />} />
      </Route>
    </Routes>
  );
}`}</code>
            </Box>
            <Box sx={{ width: 220, minWidth: 160 }}>
              <LottieAnimation animationData={navLogo} />
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{ mb: 1 }}
          >
            Cards and layout with MUI
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 1 }}
          >
            The example of implementing MUI cards component for displaying content in a structured way.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              component="pre"
              sx={{
                flexGrow: 1,
                textAlign: 'left',
                bgcolor: 'black',
                color: 'white',
                p: 2,
                borderRadius: 1,
                fontSize: 12,
                overflowX: 'auto',
              }}
            >
              <code>{`export function CustomCards({ card }: ICustomCardsProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: card.rowDirection,
          my: 1,
        }}
      >
        <CardMedia
          component="img"
          image={card.image}
          alt={card.title}
          sx={{ width: { xs: '100%', md: '35%' }, maxHeight: 280, objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6">{card.title}</Typography>
          <Typography variant="body1">{card.content}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}`}</code>
            </Box>
            <Box sx={{ width: 220, minWidth: 160 }}>
              <LottieAnimation animationData={designLogo} />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
