import React from 'react'
import hero_back from '/hero-back.png'

const Home = () => {
  return (
    <section className='min-h-screen '>
        <img src={hero_back} alt="Hero Background" className="w-full h-full object-cover" />
        <h1>Home </h1>
    </section>
  )
}

export default Home