import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import TravelRequestForm from './pages/TravelRequestForm'
import ExpenseForm from './pages/ExpenseForm'

createRoot(document.getElementById('class4')!).render(
  <StrictMode>
    <TravelRequestForm/>
    <ExpenseForm/>
  </StrictMode>,
)
