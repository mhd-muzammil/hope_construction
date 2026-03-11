import React from 'react'
import Hero from '../components/ServiceComponents/Hero'
import SEO from '../components/SEO'
import Service2 from '../components/ServiceComponents/Service2'
import Service3 from '../components/ServiceComponents/Service3'
import Service4 from '../components/ServiceComponents/Service4'

const Service = () => {
  return (
    <div>
      <SEO
        title="Construction Services Tamil Nadu | Residential & Commercial Building"
        description="Hope Construction offers residential construction, commercial building, renovation, and interior works across Tamil Nadu. Licensed, insured, and experienced."
        canonical="/service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/service' }
        ]}
      />
      <Hero/>
      <Service2/>
      <Service3/>
      <Service4/>
    </div>
  )
}

export default Service