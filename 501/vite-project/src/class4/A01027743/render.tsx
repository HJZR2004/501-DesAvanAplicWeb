import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './render.css'; // Import the CSS file
import TravelRequestForm from './pages/TravelRequestForm';
import ExpenseForm from './pages/ExpenseForm';

createRoot(document.getElementById('class4')!).render(
  <StrictMode>
    <button className='back-to' onClick={() => window.location.href = '/A01027743/menu.html'}>menu</button>
    <div className="container">
      <TravelRequestForm />
      <ExpenseForm />
    </div>
  </StrictMode>,
);