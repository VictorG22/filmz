import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import RandomMedia from '../components/RandomMedia'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Featured />
      <RandomMedia />
    </div>
  )
}

export default Home
