'use client'

import { useState } from 'react'
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import '../styles/pixel-theme.css'

const CONTRACT_ADDRESS = '0x...' // Replace with your actual contract address
const CONTRACT_ABI = [] // Replace with your actual contract ABI

export default function ClaimPage() {
  const [tokenId, setTokenId] = useState('')
  const { address } = useAccount()

  const { data: claimableAmount } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'claimableAmount',
    args: [address, tokenId],
  })

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'claim',
    args: [tokenId],
  })

  const { write: claim, isLoading, isSuccess } = useContractWrite(config)

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
      <p className="mb-4">Claimable amount: {claimableAmount?.toString() || '0'} $YAY</p>
      <button 
        onClick={() => claim?.()} 
        disabled={!claim || isLoading}
        className="pixel-button w-full"
      >
        {isLoading ? 'Claiming...' : 'Claim $YAY'}
      </button>
      {isSuccess && <p className="mt-4 text-green-400">Claim successful!</p>}
    </div>
  )
}

