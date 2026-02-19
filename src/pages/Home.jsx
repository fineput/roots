import React from 'react'
import Header from '../components/layout/Header/Header'
import Hero from '../components/sections/Hero/Hero'
import Map from '../components/sections/Map/Map'

function Home() {
  return (
    <div className="home-hage">
        <main>
            <Hero />
            <Map />
        </main>
    </div>
  )
}

export default Home