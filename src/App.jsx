// src/App.jsx
import { useEffect } from 'react'
import './App.css'
import VideoSelector from './components/VideoSelector'
import VideoPlayer   from './components/VideoPlayer'

export default function App() {
  useEffect(() => {
    const onKeyDown = (e) => {
      // this is a webOS specific function to close the app
      // it’s not part of the web standard
      // and it’s not available in the browser
      if (e.which === 461 && parent.webOS && typeof parent.webOS.platformBack === 'function') {
        parent.webOS.platformBack()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="app-container">
      <VideoSelector />
      <VideoPlayer />
    </div>
  )
}
