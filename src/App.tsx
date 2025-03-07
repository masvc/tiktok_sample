import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import VideoFeed from './components/VideoFeed'
import ProductPage from './components/ProductPage'
import './App.css'

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // GitHub Pages用のリダイレクト処理
    const params = new URLSearchParams(location.search)
    const path = params.get('path')
    if (path) {
      navigate(path, { replace: true })
    }
  }, [navigate, location])

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
