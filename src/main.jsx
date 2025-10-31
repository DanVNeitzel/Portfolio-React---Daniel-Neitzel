import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { resetAllAnimations } from './utils/animationUtils.js'

// Disponibiliza função global para reset das animações
if (typeof window !== 'undefined') {
  window.resetAnimations = resetAllAnimations;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
