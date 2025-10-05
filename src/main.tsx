import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Header from './components/Header/Header.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <App/>
  </StrictMode>,
)
