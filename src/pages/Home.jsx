import React from 'react'
import SideMenu from '../components/SideMenu'
import SearchBar from '../components/SearchBar'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home-page'>
        <SideMenu />
        <div className="content">
          <h1>Search Flight</h1>
          <SearchBar />
        </div>
      
    </div>
  )
}

export default Home
