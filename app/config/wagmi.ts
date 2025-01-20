import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const chains = [mainnet, sepolia] // adjust chains as needed

export const wagmiConfig = getDefaultConfig({
  appName: 'Your App Name',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http()
  }
})
