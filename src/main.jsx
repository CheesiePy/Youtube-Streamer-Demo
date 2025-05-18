import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// src/main.jsx
const onKeyDown = (e) => {
  if (e.which === 461 && parent.webOS && typeof parent.webOS.platformBack === 'function') {
    // this is a webOS specific function to close the app
    // it’s not part of the web standard
    // and it’s not available in the browser
    parent.webOS.platformBack()
  }
}
window.addEventListener('keydown', onKeyDown)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
