import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MoviesDetails from './pages/MoviesDetails'
import SeatLayout from './pages/SeatLayout' 
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
       <Toaster />
       {!isAdminRoute && <Navbar />}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />
       </Routes>
       {!isAdminRoute && <Footer />}
    </>
  )
}

export default App