import {
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Text,
  Link,
  Flex
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const menuItems = [
    { title: 'ホーム', path: '/' },
    { title: '作品一覧', path: '/artworks' },
    { title: 'アーティスト', path: '/artists' },
    { title: 'お問い合わせ', path: '/contact' }
  ]

  return (
    <Box 
      position="fixed" 
      top={0} 
      left={0} 
      right={0} 
      zIndex={1000}
      bg="rgba(0, 0, 0, 0.5)"
      backdropFilter="blur(10px)"
    >
      <Flex 
        justify="space-between" 
        align="center" 
        p={4}
        maxW="container.xl"
        mx="auto"
      >
        <Text 
          color="white" 
          fontSize="xl" 
          fontWeight="bold" 
          cursor="pointer"
          onClick={() => navigate('/')}
        >
          ArtFlow
        </Text>

        <IconButton
          aria-label="メニュー"
          icon={<Text fontSize="2xl">☰</Text>}
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">メニュー</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  onClick={() => {
                    navigate(item.path)
                    onClose()
                  }}
                  _hover={{ textDecoration: 'none', color: 'blue.500' }}
                  fontSize="lg"
                >
                  {item.title}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Header 