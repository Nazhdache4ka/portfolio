import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import './index.css';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);
const routerBasename =
  import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

root.render(
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </StrictMode>
);
