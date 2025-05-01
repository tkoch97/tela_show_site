import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RoutesForApp } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RoutesForApp />
    </BrowserRouter>
  </StrictMode>,
)
