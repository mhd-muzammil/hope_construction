import React from 'react'
import Hero from '../components/ProjectComponents/Hero'
import SEO from '../components/SEO'
import Project2 from '../components/ProjectComponents/Project2'

const Project = () => {
  return (
    <div>
      <SEO
        title="Construction Projects Portfolio | Hope Construction Tamil Nadu"
        description="Browse 50+ completed construction projects by Hope Construction — residential homes, commercial buildings, and renovations across Tamil Nadu."
        canonical="/project"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/project' }
        ]}
      />
      <Hero/>
      <Project2/>
    </div>
  )
}

export default Project