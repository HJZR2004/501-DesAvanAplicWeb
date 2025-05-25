import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RBAC from './pages/RBAC';
import { UserProvider } from './pages/UserContext'; // Ajusta la ruta si es diferente

createRoot(document.getElementById('class6')!).render(
  <StrictMode>
    <UserProvider>
      <RBAC />
    </UserProvider>
  </StrictMode>
);
