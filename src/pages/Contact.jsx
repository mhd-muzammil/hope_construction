import React from 'react'
import ContactSec1 from '../components/ContactComponents/ContactSec1'
import SEO from '../components/SEO'
import ContactSec3 from '../components/ContactComponents/ContactSec3'
import ContactSec4 from '../components/ContactComponents/ContactSec4'
import ContactSec2 from '../components/ContactComponents/ContactSec2'

const Contact = () => {
    return (
        <>
            <SEO
              title="Contact Hope Construction | Free Quote | Chengalpattu Tamil Nadu"
              description="Get a free construction quote from Hope Construction. Call +91 7418828814 or fill our form. Serving Tamil Nadu — Chengalpattu, Tambaram, Chennai and surrounding areas."
              canonical="/contact"
              breadcrumbs={[
                { name: 'Home', url: '/' },
                { name: 'Contact', url: '/contact' }
              ]}
            />
            <ContactSec1 />
            <ContactSec2 />
            <ContactSec3 />
            <ContactSec4 />

        </>
    )
}

export default Contact