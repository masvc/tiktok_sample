import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
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
    <Routes>
      <Route path="/" element={<VideoFeed />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  )
}

export default App
