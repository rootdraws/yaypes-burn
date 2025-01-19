'use client'

import React, { useState } from 'react'
import { useAccount, useReadContract, useWriteContract, useSimulateContract } from 'wagmi'
import TransactionSequencer from './TransactionSequencer'
import '../styles/pixel-theme.css'

const NFT_CONTRACT_ADDRESS = '0x...' // Replace with your actual NFT contract address
const NFT_CONTRACT_ABI = [] // Replace with your actual NFT contract ABI
const YAY_CONTRACT_ADDRESS = '0x...' // Replace with your actual YAY token contract address
const YAY_CONTRACT_ABI = [] // Replace with your actual YAY token contract ABI

export default function BurnPage() {
  const [selectedNFTs, setSelectedNFTs] = useState<number[]>([])
  const [showSequencer, setShowSequencer] = useState(false)
  const { address } = useAccount()

  const { data: ownedNFTs } = useReadContract({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_CONTRACT_ABI,
    functionName: 'getOwnedNFTs',
    args: [address],
  }) as { data: number[] }

  const { data: simulationData } = useSimulateContract({
    address: YAY_CONTRACT_ADDRESS,
    abi: YAY_CONTRACT_ABI,
    functionName: 'putNFTOnAltar',
    args: [selectedNFTs],
  })

  const { writeContract } = useWriteContract()

  const handleBurn = async () => {
    if (simulationData?.request) {
      setShowSequencer(true)
      await writeContract(simulationData.request)
    }
  }

  return (
    <div className="pixel-card">
      <h1 className="pixel-title">Burn to Claim $YAY</h1>
      <p className="mb-4">Select up to 8 NFTs to burn and claim $YAY tokens.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {ownedNFTs?.map((tokenId: number) => (
          <div key={tokenId} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`nft-${tokenId}`}
              className="pixel-checkbox"
              checked={selectedNFTs.includes(tokenId)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedNFTs((prev) => [...prev, tokenId].slice(0, 8))
                } else {
                  setSelectedNFTs((prev) => prev.filter((id) => id !== tokenId))
                }
              }}
            />
            <label htmlFor={`nft-${tokenId}`}>NFT #{tokenId}</label>
          </div>
        ))}
      </div>
      <button 
        onClick={handleBurn} 
        disabled={selectedNFTs.length === 0}
        className="pixel-button w-full"
      >
        Burn and Claim
      </button>
      {showSequencer && <TransactionSequencer selectedNFTs={selectedNFTs} />}
    </div>
  )
}

