import React from 'react'
import '../styles/pixel-theme.css'

// Discord component - Displays a card with Discord community invitation
export default function Discord() {
  return (
    // Main container with pixel art styling
    <div className="pixel-card text-center">
      {/* Page heading */}
      <h1 className="pixel-title">Join Our Discord Community</h1>
      
      {/* Description text */}
      <p className="mb-8">Connect with other NFT holders and stay updated on the latest news!</p>
      
      {/* Discord invite button with external link */}
      <a 
        href="https://discord.gg/your-invite-link" 
        target="_blank" 
        rel="noopener noreferrer"
        className="pixel-button inline-block"
      >
        Join Discord
      </a>
    </div>
  )
}

