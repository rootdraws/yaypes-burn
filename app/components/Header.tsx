import React from 'react'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// Header component for the main navigation and wallet connection
export default function Header() {
  return (
    // Main header container with purple theme styling
    <header className="bg-purple-800 text-white p-4 border-b-4 border-purple-600">
      {/* Centered container with flex layout for navigation and wallet button */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-4">
            {/* Navigation links with pixel-button styling */}
            <li><Link href="/" className="pixel-button">Claim</Link></li>
            <li><Link href="/burn" className="pixel-button">Burn to Claim</Link></li>
            <li><Link href="/dao" className="pixel-button">Join DAO</Link></li>
            <li><Link href="/discord" className="pixel-button">Join Discord</Link></li>
          </ul>
        </nav>
        {/* Wallet connection button from RainbowKit */}
        <ConnectButton />
      </div>
    </header>
  )
}

