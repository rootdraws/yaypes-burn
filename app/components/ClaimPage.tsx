'use client'

import React, { useState } from 'react'
import { useAccount, useReadContract, useWriteContract, useSimulateContract } from 'wagmi'
import '../styles/pixel-theme.css'

const CONTRACT_ADDRESS = '0x...' // Replace with your actual contract address
const CONTRACT_ABI = [] // Replace with your actual contract ABI

export default function ClaimPage() {
  const [tokenId, setTokenId] = useState('')
  const { address } = useAccount()

  const { data: claimableAmount } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'claimableAmount',
    args: [address, tokenId],
  }) as { data: bigint }

  const { data: simulateData } = useSimulateContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'claim',
    args: [tokenId],
  })

  const { writeContract, isPending, isSuccess } = useWriteContract()

  const handleClaim = async () => {
    if (simulateData?.request) {
      await writeContract(simulateData.request)
    }
  }

  return (
    <div className="pixel-card">
      <h1 className="pixel-title">Claim $YAY</h1>
      <p className="mb-4">Check your claim and receive 1 $YAY per NFT you hold.</p>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Token ID"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
          className="pixel-input w-full"
        />
      </div>
      <p className="mb-4">Claimable amount: {claimableAmount ? claimableAmount.toString() : '0'} $YAY</p>
      <button 
        onClick={handleClaim}
        disabled={!simulateData?.request || isPending}
        className="pixel-button w-full"
      >
        {isPending ? 'Claiming...' : 'Claim $YAY'}
      </button>
      {isSuccess && <p className="mt-4 text-green-400">Claim successful!</p>}
    </div>
  )
}

