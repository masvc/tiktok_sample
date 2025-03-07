import { Box } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

interface VideoPlayerProps {
  url: string
  isActive: boolean
}

const VideoPlayer = ({ url, isActive }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<Plyr | null>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      // 動画要素の設定
      videoRef.current.muted = true
      videoRef.current.playsInline = true
      videoRef.current.loop = true

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
          if (videoRef.current && isActive) {
            await videoRef.current.play()
          }
        } catch (error) {
          console.log('Playback failed:', error)
        }
      }

      // タッチイベントまたはクリックイベント後に再生を試みる
      const handleInteraction = () => {
        if (!hasInteracted) {
          setHasInteracted(true)
        }
        attemptPlay()
      }

      videoRef.current.addEventListener('click', handleInteraction, { passive: true })
      videoRef.current.addEventListener('touchstart', handleInteraction, { passive: true })

      // メタデータ読み込み完了時の処理
      const handleLoadedMetadata = () => {
        if (hasInteracted || isActive) {
          attemptPlay()
        }
      }
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata, { passive: true })

      // アクティブな場合は再生を試みる
      if (isActive && hasInteracted) {
        attemptPlay()
      } else if (!isActive && videoRef.current) {
        videoRef.current.pause()
      }

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('click', handleInteraction)
          videoRef.current.removeEventListener('touchstart', handleInteraction)
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata)
          videoRef.current.pause()
        }
        if (playerRef.current) {
          playerRef.current.destroy()
        }
      }
    }
  }, [url, isActive, hasInteracted])

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
        preload={isActive ? 'auto' : 'metadata'}
      >
        <source src={url} type="video/mp4" />
      </video>
    </Box>
  )
}

export default VideoPlayer 