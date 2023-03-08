import React from 'react'

import "./home.scss"

import Navbar from '../components/Navbar/Navbar'
import Featured from '../components/featured/Featured'

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Featured type="" />
    </div>
  )
}

export default Home