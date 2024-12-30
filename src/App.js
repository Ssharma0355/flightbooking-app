import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Flights from './pages/Flights'

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/passangerdetails" element={<Flights />} />
      
    </Routes>
  </Router>
   
  )
}

export default App
