import { Container, Typography } from '@mui/material';
import { CardsCustom } from '../shared';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiVite, SiMui, SiReactrouter } from 'react-icons/si';
import { rowDirection, type ICard } from '../../interfaces';

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
      {stackCards.map((card, index) => (
        <CardsCustom
          card={card}
          key={index}
          cardStyles={{ p: 2 }}
          cardContentStyles={{ textAlign: 'left' }}
        />
      ))}
    </Container>
  );
}

const stackCards: ICard[] = [
  {
    title: 'React 19',
    content:
      'The core of the project. React is used to build the UI directly inside JavaScript files using JSX markup, which is a combination of JavaScript and HTML-like syntax. The name of the library speaks for itself:React brings reactivity through state, which helps to create dynamic and interactive UIs while avoidingmanual DOM manipulation. This site follows SPA (Single Page Application) principles.',
    rowDirection: rowDirection.ROW,
    icon: <FaReact size={32} />,
  },
  {
    title: 'TypeScript',
    content:
      'Since JavaScript is a dynamically typed programming language and is not type-safe, TypeScript was used to add static typing on top of it. This helps to catch many bugs at compile time instead of in the browser. TypeScript brings structures like interfaces, custom types, enums and generics that help to write more robust and maintainable code. Nowadays, TypeScript is a must-have for most modern web development.',
    rowDirection: rowDirection.ROW,
    icon: <SiTypescript size={32} />,
  },
  {
    title: 'MUI',
    content:
      'MUI is a UI library built specifically for React. It provides a set of ready-made components and utilities that help to build a consistent and accessible UI. It is a great choice for building responsive and adaptive interfaces as fast as possible, and MUI X adds advanced components for admin panels and dashboards.',
    rowDirection: rowDirection.ROW,
    icon: <SiMui size={32} />,
  },
  {
    title: 'React Router',
    content:
      'Since React is just a library, not a complete framework, React Router brings routing to React projects. It is one of the most popular routing libraries for React and provides many hooks and components for navigation. In this site, a single layout with a header and footer wraps all pages, and each page is rendered inside it via an Outlet component instead of being manually nested in the layout component.',
    rowDirection: rowDirection.ROW,
    icon: <SiReactrouter size={32} />,
  },
  {
    title: 'Vite',
    content:
      'Vite is the build tool and dev server. It gives very fast hot reloads while developing and produces an optimized bundle for production, so the portfolio loads quickly even with media-heavy pages. It also ships with ready-to-use ESLint and TypeScript configs for the project template.',
    rowDirection: rowDirection.ROW,
    icon: <SiVite size={32} />,
  },
];
