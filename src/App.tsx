import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VideoFeed from './components/VideoFeed'
import ProductPage from './components/ProductPage'

const theme = extendTheme({})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<VideoFeed />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
