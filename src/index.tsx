import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import './index.css';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);

if (!root) {
  throw new Error('Root element not found');
}

root.render(
  <StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </StrictMode>
);
