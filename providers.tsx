'use client'

import React from 'react'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig, createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'

const projectId = 'YOUR_PROJECT_ID'

const { wallets } = getDefaultWallets({
  appName: 'NFT Collection Web3',
  projectId,
})

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http()
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider appInfo={{ appName: 'NFT Collection Web3' }}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

