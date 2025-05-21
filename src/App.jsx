// src/App.jsx
import { useState, useEffect } from 'react'
import './App.css'
import VideoSelector from './components/VideoSelector'
import VideoPlayer   from './components/VideoPlayer'

export default function App() {
  // track whether any key is currently pressed
  const [isKeyPressed, setIsKeyPressed] = useState(false)

  useEffect(() => {
    const handleKeyDown = () => {
      // when a key goes down, show the button
      setIsKeyPressed(true)
    }
    const handleKeyUp = () => {
      // when the key is released, hide the button
      setIsKeyPressed(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div className="app-container">
      {isKeyPressed && (
        <button className="key-pressed-button">
          key is pressed
        </button>
      )}
      <VideoSelector />
      <VideoPlayer />
    </div>
  )
}
