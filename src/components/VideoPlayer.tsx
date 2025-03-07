import { Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

interface VideoPlayerProps {
  url: string
}

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<Plyr | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      // 動画要素の設定
      videoRef.current.muted = true
      videoRef.current.playsInline = true
      videoRef.current.loop = true
      videoRef.current.preload = 'auto'

      // Plyrの設定
      if (!playerRef.current) {
        playerRef.current = new Plyr(videoRef.current, {
          controls: [],
          muted: true,
          clickToPlay: false,
          keyboard: {
            focused: false,
            global: false
          },
          ratio: '16:9',
          autopause: false
        })
      }

      // インタラクション後に自動再生を試みる
      const attemptPlay = async () => {
        try {
          if (videoRef.current) {
            await videoRef.current.play()
          }
        } catch (error) {
          console.log('Playback failed:', error)
        }
      }

      // タッチイベントまたはクリックイベント後に再生を試みる
      const startPlayback = () => {
        attemptPlay()
      }

      const handleInteraction = () => {
        startPlayback()
      }

      videoRef.current.addEventListener('click', handleInteraction, { passive: true })
      videoRef.current.addEventListener('touchstart', handleInteraction, { passive: true })

      // 初回の再生試行
      attemptPlay()

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('click', handleInteraction)
          videoRef.current.removeEventListener('touchstart', handleInteraction)
        }
        if (playerRef.current) {
          playerRef.current.destroy()
        }
      }
    }
  }, [url])

  return (
    <Box w="100%" h="100%" bg="black">
      <video
        ref={videoRef}
        id="player"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover'
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