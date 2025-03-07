import { Box, Container, Text, Flex, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box 
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg="rgba(0, 0, 0, 0.3)"
      backdropFilter="blur(10px)"
      color="white"
      py={1}
      height="32px"
      zIndex={1000}
    >
      <Container maxW="container.xl" height="100%">
        <Flex 
          justify="space-between" 
          align="center"
          height="100%"
          fontSize="xs"
          color="whiteAlpha.900"
        >
          <Text>© 2024 TiktokSample</Text>
          <Link 
            href="https://example.com"
            _hover={{ color: 'white', textDecoration: 'none' }}
          >
            会社概要
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer 