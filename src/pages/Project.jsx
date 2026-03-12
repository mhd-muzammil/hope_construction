import React from 'react'
import Hero from '../components/ProjectComponents/Hero'
import SEO from '../components/SEO'
import Project2 from '../components/ProjectComponents/Project2'
import ProjectMediaGallery from '../components/ProjectComponents/ProjectMediaGallery'

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
      <ProjectMediaGallery />
      <Project2/>
    </div>
  )
}

export default Project