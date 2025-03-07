import { Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

interface VideoPlayerProps {
  url: string
}

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<Plyr>()

  useEffect(() => {
    if (videoRef.current) {
      // 動画要素の設定
      videoRef.current.muted = true
      videoRef.current.playsInline = true
      videoRef.current.loop = true
      videoRef.current.preload = 'auto'

      // Plyrの設定
      playerRef.current = new Plyr(videoRef.current, {
        controls: [],
        clickToPlay: false,
        keyboard: false,
        autopause: false,
        muted: true,
        volume: 0,
        loop: { active: true }
      })

      // インタラクション後に自動再生を試みる
      const attemptPlay = async () => {
        try {
          await videoRef.current?.play()
        } catch (error) {
          console.log('Playback failed:', error)
        }
      }

      // タッチイベントまたはクリックイベント後に再生を試みる
      const startPlayback = () => {
        attemptPlay()
        document.removeEventListener('touchstart', startPlayback)
        document.removeEventListener('click', startPlayback)
      }

      document.addEventListener('touchstart', startPlayback)
      document.addEventListener('click', startPlayback)

      // 初回の再生試行
      attemptPlay()

      return () => {
        document.removeEventListener('touchstart', startPlayback)
        document.removeEventListener('click', startPlayback)
        if (playerRef.current) {
          playerRef.current.destroy()
        }
      }
    }
  }, [url])

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <Box w="100%" h="100%" bg="black" onClick={handleVideoClick}>
      <video
        ref={videoRef}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          touchAction: 'none'
        }}
        playsInline
        muted
        loop
        preload="auto"
      >
        <source src={url} type="video/mp4" />
      </video>
    </Box>
  )
}

export default VideoPlayer 