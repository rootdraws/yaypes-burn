'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import makeBlockie from 'ethereum-blockies-base64'
import { useEffect, useState } from 'react'

// Header component for the main navigation and wallet connection
export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleConnect = async () => {
    await connect({ connector: injected() })
  }

  if (!mounted) {
    return (
      <header>
        <div>
          <nav>
            <ul>
            </ul>
          </nav>
          <button className="pixel-button">
            Connect
          </button>
        </div>
      </header>
    )
  }

  return (
    <header>
      <div>
        <nav>
          <ul>
          </ul>
        </nav>
        <button 
          onClick={isConnected ? () => disconnect() : handleConnect}
          className="pixel-button"
        >
          {isConnected && address ? (
            <div className="pixel-button-wrapper">
              <img
                src={makeBlockie(address)}
                width={24}
                height={24}
                style={{ borderRadius: '3px' }}
                alt="wallet blockie"
              />
              <span>
                {`${address.slice(0, 6)}...${address.slice(-4)}`}
              </span>
            </div>
          ) : (
            'Connect'
          )}
        </button>
      </div>
    </header>
  )
}

