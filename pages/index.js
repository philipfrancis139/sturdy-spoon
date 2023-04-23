import React from 'react'
import Hero from '@/components/storefront/hero'
import Trending from '@/components/storefront/trending'
import Collections from '@/components/storefront/collection'
import Highlight from '@/components/storefront/highlight'

const Home = () => {
  return (
    <div>
    <video id="video" autoPlay loop muted src='/landing.mp4'></video>
        <Trending/>
        <Hero />
        <Collections/>
        <Highlight/>
    </div>
  )
}

export default Home