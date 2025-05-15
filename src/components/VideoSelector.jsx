// src/components/VideoSelector.jsx
export default function VideoSelector() {
  const videos = [
    { id: 'M7lc1UVf-VE', title: 'Demo Video' },
    { id: 'dQw4w9WgXcQ', title: 'Rick Roll' },
    { id: 'eX2qFMC8cFo', title: 'Showcase Clip' }
  ]

  return (
    <div className="video-selector">
      {videos.map(v => (
        <button
          key={v.id}
          className="video-button"
          data-id={v.id}
        >
          {v.title}
        </button>
      ))}
    </div>
  )
}
