'use client'

import React, { useState, useEffect } from 'react'
import { useWriteContract, useSimulateContract } from 'wagmi'
import '../styles/pixel-theme.css'

const NFT_CONTRACT_ADDRESS = '0x...' as `0x${string}` // Replace with your actual NFT contract address
const NFT_CONTRACT_ABI = [] // Replace with your actual NFT contract ABI
const YAY_CONTRACT_ADDRESS = '0x...' as `0x${string}` // Replace with your actual YAY token contract address
const YAY_CONTRACT_ABI = [] // Replace with your actual YAY token contract ABI

interface TransactionSequencerProps {
  selectedNFTs: number[]
}

export default function TransactionSequencer({ selectedNFTs }: TransactionSequencerProps) {
  // Track current transaction step and modal visibility
  const [currentStep, setCurrentStep] = useState(0)
  const [isOpen, setIsOpen] = useState(true)

  // Define the sequence of transactions to be executed
  // 1. Put NFTs on altar
  // 2. Burn each NFT individually
  // 3. Meditate
  // 4. Claim reward
  const steps = [
    { name: 'Put NFTs on Altar', contract: YAY_CONTRACT_ADDRESS, abi: YAY_CONTRACT_ABI, functionName: 'putNFTOnAltar', args: [selectedNFTs] },
    
    ...selectedNFTs.map((tokenId) => ({ name: `Burn NFT #${tokenId}`, contract: NFT_CONTRACT_ADDRESS, abi: NFT_CONTRACT_ABI, functionName: 'burn', args: [tokenId] })),
    { name: 'Meditate', contract: YAY_CONTRACT_ADDRESS, abi: YAY_CONTRACT_ABI, functionName: 'meditate', args: [] },
    { name: 'Claim Reward', contract: YAY_CONTRACT_ADDRESS, abi: YAY_CONTRACT_ABI, functionName: 'claimReward', args: [] },
  ]

  // Simulate the current transaction step before execution
  const { data: simulateData } = useSimulateContract({
    address: steps[currentStep].contract as `0x${string}`,
    abi: steps[currentStep].abi,
    functionName: steps[currentStep].functionName,
    args: steps[currentStep].args,
  })

  // Hook to execute the actual transaction
  const { writeContract, isPending, isSuccess } = useWriteContract()

  // Automatically advance to next step when current transaction succeeds
  useEffect(() => {
    if (isSuccess && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }, [isSuccess, currentStep])

  // Close the modal 2 seconds after all steps are completed
  useEffect(() => {
    if (currentStep === steps.length) {
      setTimeout(() => setIsOpen(false), 2000)
    }
  }, [currentStep])

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="pixel-card w-96">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Transaction Sequence</h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                index < currentStep ? 'bg-green-500 text-white' : 
                index === currentStep ? 'bg-blue-500 text-white' : 
                'bg-gray-600'
              }`}>
                {index < currentStep ? '✓' : index + 1}
              </div>
              <span className={index < currentStep ? 'text-green-400' : ''}>{step.name}</span>
            </div>
          ))}
        </div>
        {currentStep < steps.length && (
          <button 
            onClick={() => simulateData && writeContract(simulateData.request)} 
            disabled={!simulateData || isPending}
            className="pixel-button w-full mt-4"
          >
            {isPending ? 'Processing...' : `Execute ${steps[currentStep].name}`}
          </button>
        )}
      </div>
    </div>
  )
}

