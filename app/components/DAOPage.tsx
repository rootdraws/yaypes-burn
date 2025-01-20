'use client'

import React from 'react'
import '../styles/pixel-theme.css'

// Component for directing users to our PartyDAO page
export default function DAOPage() {
  return (
    // Pixel-themed card container for DAO information
    <div className="pixel-card text-center">
      {/* Main heading */}
      <h1 className="pixel-title">Join Our DAO</h1>
      
      {/* Brief description of the DAO's purpose */}
      <p className="mb-8">
        Participate in our community-driven decisions through PartyDAO! 
        Join our party to collaborate on group investments and governance.
      </p>
      
      {/* External link to PartyDAO platform */}
      <a 
        href="https://www.party.app/start" 
        target="_blank" 
        rel="noopener noreferrer"
        className="pixel-button inline-block"
      >
        Join DAO on Party.app
      </a>
    </div>
  )
}

