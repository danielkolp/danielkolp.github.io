import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const fallbackPath = sessionStorage.getItem('spa-fallback-path')

if (fallbackPath) {
  sessionStorage.removeItem('spa-fallback-path')
  window.history.replaceState(null, '', fallbackPath)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
