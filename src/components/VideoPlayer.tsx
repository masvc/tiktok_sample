import { Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import 'plyr/dist/plyr.css'

interface VideoPlayerProps {
  url: string
  isActive: boolean
}

const VideoPlayer = ({ url, isActive }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    // 動画要素の設定
    videoElement.muted = true
    videoElement.playsInline = true
    videoElement.loop = true

    // アクティブな場合は再生を試みる
    const playVideo = async () => {
      try {
        if (isActive) {
          await videoElement.play()
        } else {
          videoElement.pause()
        }
      } catch (error) {
        console.log('Video playback error:', error)
      }
    }

    playVideo()

    // クリーンアップ
    return () => {
      if (videoElement) {
        videoElement.pause()
      }
    }
  }, [isActive, url])

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