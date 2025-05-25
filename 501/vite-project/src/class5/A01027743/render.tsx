import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import TravelRequestForm from './pages/TravelRequestForm';

createRoot(document.getElementById('class5')!).render(
  <StrictMode>
      <TravelRequestForm/>
  </StrictMode>,
);