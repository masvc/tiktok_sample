import { Box, Container, IconButton, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Virtual } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'
import { useState, useCallback } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import VideoPlayer from './VideoPlayer'
import Header from './Header'
import Footer from './Footer'

interface Video {
  id: string
  url: string
  title: string
  director: string
  filmId: string
}

const videos: Video[] = [
  {
    id: '1',
    url: '/videos/sm1.mp4',
    title: '桜の記憶',
    director: '山田 優子',
    filmId: 'sakura-memory'
  },
  {
    id: '2',
    url: '/videos/sm2.mp4',
    title: '東京の夜に',
    director: '佐藤 健一',
    filmId: 'tokyo-night'
  },
  {
    id: '3',
    url: '/videos/sm3.mp4',
    title: '桜の記憶 - メイキング映像',
    director: '山田 優子',
    filmId: 'sakura-memory'
  },
  {
    id: '4',
    url: '/videos/sm4.mp4',
    title: '東京の夜に - メイキング映像',
    director: '佐藤 健一',
    filmId: 'tokyo-night'
  },
  {
    id: '5',
    url: '/videos/sm5.mp4',
    title: '桜の記憶 - 予告編',
    director: '山田 優子',
    filmId: 'sakura-memory'
  },
  {
    id: '6',
    url: '/videos/sm6.mp4',
    title: '東京の夜に - 予告編',
    director: '佐藤 健一',
    filmId: 'tokyo-night'
  },
  {
    id: '7',
    url: '/videos/sm7.mp4',
    title: '桜の記憶 - インタビュー',
    director: '山田 優子',
    filmId: 'sakura-memory'
  },
  {
    id: '8',
    url: '/videos/sm8.mp4',
    title: '東京の夜に - インタビュー',
    director: '佐藤 健一',
    filmId: 'tokyo-night'
  }
]

const VideoFeed = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }, [])

  // 現在のスライドの前後1つまでの動画のみをレンダリング
  const shouldRenderVideo = (index: number) => {
    return Math.abs(index - activeIndex) <= 1
  }

  return (
    <Box position="relative" h="100vh">
      <Header />
      <Container maxW="100vw" h="100vh" p={0}>
        <Swiper
          direction="vertical"
          modules={[Navigation, Pagination, Virtual]}
          pagination={{ clickable: true }}
          virtual
          slidesPerView={1}
          speed={300}
          threshold={20}
          followFinger={true}
          watchSlidesProgress={true}
          onSlideChange={handleSlideChange}
          style={{ height: '100%' }}
          observer={true}
          observeParents={true}
          simulateTouch={true}
          touchRatio={1}
          resistance={false}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={video.id} virtualIndex={index}>
              <Box position="relative" h="100%" w="100%">
                {shouldRenderVideo(index) ? (
                  <VideoPlayer url={video.url} isActive={index === activeIndex} />
                ) : (
                  <Box w="100%" h="100%" bg="black" />
                )}
                <Box
                  position="absolute"
                  bottom={16}
                  left={4}
                  right={4}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  zIndex={1}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                    <Box flex={1}>
                      <Text color="white" fontSize="2xl" fontWeight="bold" textShadow="0 0 8px rgba(0,0,0,0.8)">
                        {video.title}
                      </Text>
                      <Text color="whiteAlpha.900" fontSize="md" textShadow="0 0 8px rgba(0,0,0,0.8)">
                        監督: {video.director}
                      </Text>
                    </Box>
                    <IconButton
                      aria-label="作品詳細を見る"
                      icon={<Text fontSize="2xl">🎬</Text>}
                      onClick={() => navigate(`/product/${video.filmId}`)}
                      colorScheme="whiteAlpha"
                      size="lg"
                      isRound
                      _hover={{ 
                        transform: 'scale(1.1)',
                        bg: 'whiteAlpha.400'
                      }}
                      transition="all 0.2s"
                      bg="whiteAlpha.200"
                      backdropFilter="blur(8px)"
                      ml={4}
                    />
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Footer />
    </Box>
  )
}

export default VideoFeed 