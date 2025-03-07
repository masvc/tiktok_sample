import { Box, Button, Container, Heading, Image, Text, VStack, HStack, IconButton, Tag } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'

interface Film {
  id: string
  title: string
  director: string
  cast: string[]
  year: string
  duration: string
  price: number
  description: string
  imageUrl: string
  genres: string[]
}

const films: Film[] = [
  {
    id: 'sakura-memory',
    title: '桜の記憶',
    director: '山田 優子',
    cast: ['木村 真央', '田中 涼子', '佐々木 大地'],
    year: '2024',
    duration: '1時間 47分',
    price: 2500,
    description: '東京の下町を舞台に、老舗の和菓子屋を継ぐ女性と、彼女の人生を変える一通の手紙から始まる心温まる物語。新進気鋭の女性監督・山田優子が描く、伝統と現代が交差する日本の日常。繊細な心理描写と四季折々の美しい情景が、国内外の映画祭で高い評価を受け、第47回日本アカデミー賞優秀作品賞にノミネート。',
    imageUrl: 'https://picsum.photos/800/450?random=1',
    genres: ['ドラマ', '人間ドラマ', '日常']
  },
  {
    id: 'tokyo-night',
    title: '東京の夜に',
    director: '佐藤 健一',
    cast: ['鈴木 拓也', '山本 愛', '中村 優'],
    year: '2024',
    duration: '2時間 5分',
    price: 2800,
    description: '深夜の渋谷を舞台に、SNSで出会った3人の若者たちの運命が交錯する。気鋭の映像作家・佐藤健一が放つ青春群像劇。現代の東京を生きる若者たちの孤独と希望を、斬新な映像表現と繊細な演出で描き出す。第37回東京国際映画祭コンペティション部門グランプリ受賞作品。',
    imageUrl: 'https://picsum.photos/800/450?random=2',
    genres: ['青春', 'ドラマ', '現代劇']
  }
]

const ProductPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const film = films.find(p => p.id === id)

  if (!film) {
    return (
      <Container>
        <Text>作品が見つかりませんでした。</Text>
      </Container>
    )
  }

  return (
    <Container maxW="container.md" py={8}>
      <Box display="flex" flexDirection="column" gap={8}>
        <HStack spacing={4} mb={4}>
          <IconButton
            aria-label="戻る"
            icon={<Text fontSize="xl">←</Text>}
            onClick={() => navigate('/')}
            variant="ghost"
          />
          <Heading size="lg">{film.title}</Heading>
        </HStack>

        <Image
          src={film.imageUrl}
          alt={film.title}
          borderRadius="lg"
          objectFit="cover"
          w="100%"
          aspectRatio={16/9}
          fallbackSrc="https://via.placeholder.com/800x450?text=Loading..."
        />

        <VStack spacing={6} align="stretch">
          <Box>
            <HStack spacing={2} mb={4} wrap="wrap">
              {film.genres.map((genre) => (
                <Tag key={genre} size="md" variant="subtle" colorScheme="blue">
                  {genre}
                </Tag>
              ))}
            </HStack>
            <Text fontSize="lg" mb={2}>
              監督: {film.director}
            </Text>
            <Text fontSize="lg" mb={2}>
              出演: {film.cast.join(', ')}
            </Text>
            <Text fontSize="lg" mb={2}>
              {film.year} | {film.duration}
            </Text>
          </Box>

          <Box>
            <Text fontSize="lg" lineHeight="tall">
              {film.description}
            </Text>
          </Box>

          <Box bg="gray.50" p={6} borderRadius="lg">
            <Text fontSize="2xl" fontWeight="bold" color="blue.500" mb={4}>
              ¥{film.price.toLocaleString()}
            </Text>
            <Button colorScheme="blue" size="lg" width="100%">
              映画を購入して視聴する
            </Button>
            <Text fontSize="sm" color="gray.500" mt={2} textAlign="center">
              購入後30日間視聴可能
            </Text>
          </Box>
        </VStack>
      </Box>
    </Container>
  )
}

export default ProductPage 