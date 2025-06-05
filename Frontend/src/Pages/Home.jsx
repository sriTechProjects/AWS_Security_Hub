import React from 'react'
import Navbar from '../Components/Navbar'
import Dashboard from '../Components/Dashboard'

const Home = () => {
  return (
    <div className='Main h-screen overflow-hidden flex-col items-center bg-[#eaebf0] justify-center'>
      <Navbar/> 
       <Dashboard/>
    </div>
  )
}

export default Home
