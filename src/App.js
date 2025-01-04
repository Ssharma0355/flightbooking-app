import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Flights from './pages/Flights'
import SelectingDate from './pages/SelectingDate'
import BoardingPass from './pages/BoardingPass'
import Selfcheckin from './pages/Selfcheckin'
import Conclusion from './pages/Conclusion'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passangerdetails" element={<Flights />} />
        <Route path="/selectseat" element={<SelectingDate />} />
        <Route path="/boardingpass" element={<BoardingPass />} />
        <Route path="/selfcheckin" element={<Selfcheckin />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </Router>
  );
}

export default App
