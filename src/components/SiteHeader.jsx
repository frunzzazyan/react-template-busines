import React from 'react'

import "/src/SiteHeader.css"
import { Link } from 'react-router-dom'

const SiteHeader = () => {
  return (
    <header>
        <h1>
            Marco.co
        </h1>
        <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/about"><li>ABOUT ME</li></Link>
            <Link to="/practiceAreas"><li>PRACTICE AREAS</li></Link>
            <Link to="/legal"><li>LEGAL TEAM</li></Link>
            <Link to="/blog"><li>BLOG</li></Link>
            <Link to="/contact"><li>CONTACT</li></Link>
            
        </ul>
    </header>
  )
}

export default SiteHeader