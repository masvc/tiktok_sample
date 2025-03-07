import { Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import VideoFeed from './components/VideoFeed'
import ProductPage from './components/ProductPage'

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<VideoFeed />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </ChakraProvider>
  )
}

export default App
