'use client'

import { useState } from 'react'
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import '../styles/pixel-theme.css'

const DAO_CONTRACT_ADDRESS = '0x...' // Replace with your actual DAO contract address
const DAO_CONTRACT_ABI = [] // Replace with your actual DAO contract ABI

export default function DAOPage() {
  const [isNFTHolder, setIsNFTHolder] = useState(false)
  const { address } = useAccount()

  const { data: isMember } = useContractRead({
    address: DAO_CONTRACT_ADDRESS,
    abi: DAO_CONTRACT_ABI,
    functionName: 'isMember',
    args: [address],
  })

  const { config } = usePrepareContractWrite({
    address: DAO_CONTRACT_ADDRESS,
    abi: DAO_CONTRACT_ABI,
    functionName: 'joinDAO',
    value: BigInt(100000000000000000), // 0.1 ETH in wei
  })

  const { write: joinDAO, isLoading, isSuccess } = useContractWrite(config)

  const checkNFTHolding = () => {
    setIsNFTHolder(true)
  }

  return (
    <div className="pixel-card">
      <h1 className="pixel-title">Join DAO</h1>
      <p className="mb-4">Join our DAO and participate in community-driven decisions!</p>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-purple-400">How it works:</h2>
        <ul className="list-disc list-inside text-purple-200">
          <li>Membership costs 0.1 ETH</li>
          <li>You must hold an NFT from our collection to join</li>
          <li>Funds raised will be used to form DAO-owned LP for Sudoswap and $YAY / ETH LP</li>
        </ul>
      </div>
      {!isMember && (
        <>
          <button onClick={checkNFTHolding} className="pixel-button w-full mb-4">
            Check NFT Holding
          </button>
          {isNFTHolder && (
            <button 
              onClick={() => joinDAO?.()} 
              disabled={!joinDAO || isLoading}
              className="pixel-button w-full"
            >
              {isLoading ? 'Joining...' : 'Join DAO (0.1 ETH)'}
            </button>
          )}
        </>
      )}
      {isMember && <p className="text-green-400">You are already a member of the DAO!</p>}
      {isSuccess && <p className="mt-4 text-green-400">Successfully joined the DAO!</p>}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2 text-purple-400">PartyDAO Campaign</h2>
        <p className="mb-4">Join our PartyDAO campaign to participate in group investments and decision-making.</p>
        <a 
          href="https://partydao.com/your-campaign-link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pixel-button inline-block"
        >
          View PartyDAO Campaign
        </a>
      </div>
    </div>
  )
}

