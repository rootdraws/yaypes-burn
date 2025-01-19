import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Header() {
  return (
    <header className="bg-purple-800 text-white p-4 border-b-4 border-purple-600">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="pixel-button">Claim</Link></li>
            <li><Link href="/burn" className="pixel-button">Burn to Claim</Link></li>
            <li><Link href="/dao" className="pixel-button">Join DAO</Link></li>
            <li><Link href="/discord" className="pixel-button">Join Discord</Link></li>
          </ul>
        </nav>
        <ConnectButton />
      </div>
    </header>
  )
}

