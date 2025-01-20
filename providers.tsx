'use client'

import React from 'react'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { createConfig, WagmiProvider } from 'wagmi'
import { mainnet, sepolia, base, baseSepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'
import { http } from 'viem'

// WalletConnect project ID for authentication
const projectId = 'YOUR_PROJECT_ID'

// Configure supported wallets with RainbowKit
const { wallets } = getDefaultWallets({
  appName: 'NFT Collection Web3',
  projectId,
})

// Wagmi configuration for blockchain interactions
const config = createConfig({
  chains: [base, baseSepolia],  // Supported blockchain networks
  connectors: [
    injected(),  // Support for browser wallets like MetaMask
    walletConnect({ projectId: 'YOUR_PROJECT_ID' })  // Support for WalletConnect protocol
  ],
  transports: {  // RPC endpoints for each network
    [base.id]: http('https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY'),
    [baseSepolia.id]: http('https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY')
  }
})

// Root provider wrapper component for Web3 functionality
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider appInfo={{ 
        appName: 'NFT Collection Web3',
        learnMoreUrl: 'https://your-docs-url.com'
      }}>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  )
}

