import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import VideoEditing from './pages/video'
import Graphics from './pages/graphics'
import SEO from './pages/seo'
import MetaAds from './pages/meta'
import VideoShoot from './pages/vshoot'
import PhotoShoot from './pages/pshoot'
import Apply from './pages/apply'
import Footer from './components/footer'
import Signup from './pages/signup'
import Login from './pages/login'
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<VideoEditing />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/meta" element={<MetaAds />} />
        <Route path="/vshoot" element={<VideoShoot />} />
        <Route path="/pshoot" element={<PhotoShoot />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
