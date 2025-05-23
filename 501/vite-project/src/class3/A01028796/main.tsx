/** @jsxImportSource react */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Login';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
