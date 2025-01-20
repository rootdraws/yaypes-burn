'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiConfig, createConfig, http } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { useState } from 'react'
import { mainnet } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { createPublicClient } from 'viem'

const config = createConfig({
  chains: [mainnet],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http()
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  )
} 