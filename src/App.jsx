// src/App.jsx
import { useEffect } from 'react'
import './App.css'
import VideoSelector from './components/VideoSelector'
import VideoPlayer   from './components/VideoPlayer'

export default function App() {
  useEffect(() => {
    const onKeyDown = (e) => {
      // alart the key pressed and the key code
      alert(`Key pressed: ${e.key}, Key code: ${e.keyCode}`)
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
