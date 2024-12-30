import { Link } from "react-router-dom"
import React from 'react'
import "../styles/sideMenu.css"
function SideMenu() {
  return (
      <div className='side-menu'>
          <ul>
              <li><Link to="/">Search Flight</Link></li>
              <li><Link to="/passangerdetails">Passanger Details</Link></li>
              <li><Link to="/selectseat">Select Seat</Link></li>
              <li><Link to="/boardingpass">Boarding Pass</Link></li>
              <li><Link to="/selfcheckin">Self check-in</Link></li>
              <li><Link to="/conclusion">Conclusion</Link></li>
          </ul>

      </div>
  )
}

export default SideMenu
