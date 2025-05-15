// src/App.jsx
import './App.css'
import VideoSelector from './components/VideoSelector'
import VideoPlayer   from './components/VideoPlayer'

export default function App() {
  return (
    <div className="app-container">
      <VideoSelector />
      <VideoPlayer />
    </div>
  )
}
