import React from 'react'
import '../styles/pixel-theme.css'

export default function Discord() {
  return (
    <div className="pixel-card text-center">
      <h1 className="pixel-title">Join Our Discord Community</h1>
      <p className="mb-8">Connect with other NFT holders and stay updated on the latest news!</p>
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

