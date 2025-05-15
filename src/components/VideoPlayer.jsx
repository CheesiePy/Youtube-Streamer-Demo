// src/components/VideoPlayer.jsx
import { useEffect } from 'react'
import './VideoPlayer.css'

let player, iframe
const $ = document.querySelector.bind(document)

// this runs once on mount
export default function VideoPlayer() {
  useEffect(() => {
    // called by YouTube API when it’s loaded
    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        // grab the first button’s data-id as default
        videoId: document.querySelector('.video-button').dataset.id,
        events: { onReady: onPlayerReady }
      })
    }

    function onPlayerReady(event) {
      // keep refs
      iframe = $('#player')
      setupListener()
    }

    function setupListener() {
      // attach to every selector button
      document.querySelectorAll('.video-button').forEach(btn => {
        btn.addEventListener('click', playFullscreen)
      })
    }

    function playFullscreen(e) {
      const vid = e.currentTarget.dataset.id
      player.loadVideoById(vid)
      player.playVideo()

      // request true fullscreen on the iframe container
      const requestFullScreen =
        iframe.requestFullScreen ||
        iframe.mozRequestFullScreen ||
        iframe.webkitRequestFullScreen ||
        iframe.msRequestFullscreen

      if (requestFullScreen) {
        requestFullScreen.bind(iframe)()
      }
    }

    // inject the YouTube API script if needed
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)
    } else {
      window.onYouTubeIframeAPIReady()
    }

    // cleanup listeners on unmount
    return () => {
      document.querySelectorAll('.video-button').forEach(btn => {
        btn.removeEventListener('click', playFullscreen)
      })
    }
  }, [])

  return <div id="player" className="youtube-player" />
}
