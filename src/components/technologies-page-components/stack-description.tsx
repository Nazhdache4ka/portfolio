import { Container, Typography, Card, CardContent, Box } from '@mui/material';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiVite, SiMui, SiReactrouter } from 'react-icons/si';

export function StackDescription() {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 2, textAlign: 'center' }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        color="primary.main"
      >
        Core technologies of this project
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
          <Box sx={{ mr: 2 }}>
            <FaReact size={32} />
          </Box>
          <CardContent sx={{ textAlign: 'left' }}>
            <Typography
              variant="h6"
              fontWeight={700}
            >
              React 19
            </Typography>
            <Typography variant="body1">
              The core of the project. React is used to build the UI directly inside JavaScript files using JSX markup,
              which is a combination of JavaScript and HTML-like syntax. The name of the library speaks for itself:
              React brings reactivity through state, which helps to create dynamic and interactive UIs while avoiding
              manual DOM manipulation. This site follows SPA (Single Page Application) principles.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
          <Box sx={{ mr: 2 }}>
            <SiTypescript size={32} />
          </Box>
          <CardContent sx={{ textAlign: 'left' }}>
            <Typography
              variant="h6"
              fontWeight={700}
            >
              TypeScript
            </Typography>
            <Typography variant="body1">
              Since JavaScript is a dynamically typed programming language and is not type-safe, TypeScript was used to
              add static typing on top of it. This helps to catch many bugs at compile time instead of in the browser.
              TypeScript brings structures like interfaces, custom types, enums and generics that help to write more
              robust and maintainable code. Nowadays, TypeScript is a must-have for most modern web development.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
          <Box sx={{ mr: 2 }}>
            <SiMui size={32} />
          </Box>
          <CardContent sx={{ textAlign: 'left' }}>
            <Typography
              variant="h6"
              fontWeight={700}
            >
              MUI
            </Typography>
            <Typography variant="body1">
              MUI is a UI library built specifically for React. It provides a set of ready-made components and
              utilities that help to build a consistent and accessible UI. It is a great choice for building responsive
              and adaptive interfaces as fast as possible, and MUI X adds advanced components for admin panels and
              dashboards.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
          <Box sx={{ mr: 2 }}>
            <SiReactrouter size={32} />
          </Box>
          <CardContent sx={{ textAlign: 'left' }}>
            <Typography
              variant="h6"
              fontWeight={700}
            >
              React Router
            </Typography>
            <Typography variant="body1">
              Since React is just a library, not a complete framework, React Router brings routing to React projects. It
              is one of the most popular routing libraries for React and provides many hooks and components for
              navigation. In this site, a single layout with a header and footer wraps all pages, and each page is
              rendered inside it via an <code>Outlet</code> instead of being manually nested in the layout component.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
          <Box sx={{ mr: 2 }}>
            <SiVite size={32} />
          </Box>
          <CardContent sx={{ textAlign: 'left' }}>
            <Typography
              variant="h6"
              fontWeight={700}
            >
              Vite
            </Typography>
            <Typography variant="body1">
              Vite is the build tool and dev server. It gives very fast hot reloads while developing and produces an
              optimized bundle for production, so the portfolio loads quickly even with media-heavy pages. It also
              ships with ready-to-use ESLint and TypeScript configs for the project template.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
