import React from 'react'
import Hero from '../components/HomeComponents/Hero'
import SEO from '../components/SEO'
import { localBusinessSchema, websiteSchema } from '../data/schemas'
import Home2 from '../components/HomeComponents/Home2'
import Home3 from '../components/HomeComponents/Home3'
import Home4 from '../components/HomeComponents/Home4'
import Home5 from '../components/HomeComponents/Home5'
import Home6 from '../components/HomeComponents/Home6'
import Home7 from '../components/HomeComponents/Home7'
import Home8 from '../components/HomeComponents/Home8'
import Home9 from '../components/HomeComponents/Home9'
import Home10 from '../components/HomeComponents/Home10'
import Home11 from '../components/HomeComponents/Home11'

const Home = () => {
  return (
    <>
      <SEO
        title="Hope Construction | Building Contractor in Tamil Nadu"
        description="Hope Construction delivers premium residential and commercial construction in Tamil Nadu. 10+ years experience. Licensed & trusted builders. Get a free quote today."
        canonical="/"
        schema={[localBusinessSchema, websiteSchema]}
      />
      <Hero />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
      <Home8 />
      <Home9 />
      <Home10 />  
      <Home11 />  
    </>
  )
}

export default Home