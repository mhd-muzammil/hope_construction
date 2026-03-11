import React from 'react'
import Hero from '../components/AboutComponents/Hero'
import SEO from '../components/SEO'
import { organizationSchema } from '../data/schemas'
import About2 from '../components/AboutComponents/About2'
import About3 from '../components/AboutComponents/About3'
import About4 from '../components/AboutComponents/About4'
import About5 from '../components/AboutComponents/About5'
import About6 from '../components/AboutComponents/About6'

const About = () => {
  return (
    <div>
      <SEO
        title="About Hope Construction | Trusted Builders in Tamil Nadu Since 2014"
        description="Hope Construction — 10+ years building excellence in Tamil Nadu. Meet our team of licensed engineers and builders dedicated to quality construction."
        canonical="/about"
        schema={organizationSchema}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' }
        ]}
      />
      <Hero />
      <About2 />
      <About3 />
      <About4 />
      <About5 />
      <About6 />
    </div>
  )
}

export default About