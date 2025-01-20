'use client'

import React, { useState } from 'react'
import { useAccount, useReadContract, useWriteContract, useSimulateContract } from 'wagmi'
import '../styles/pixel-theme.css'
import Button from './Button'
import TabContainer from './TabContainer'

const CONTRACT_ADDRESS = '0x...' // Replace with your actual contract address
const CONTRACT_ABI = [] // Replace with your actual contract ABI

export default function ClaimPage() {
  const tabs = [
    {
      id: 'claim',
      label: '🟡 $YAY CLAIM',
      content: (
        <div>
          <h2>Claim $YAY AIRDROP</h2>
          <Button>Claim</Button>
        </div>
      )
    },
    {
      id: 'burn',
      label: '🔥 BURN YAYPES',
      content: (
        <div>
          <h2>Burn YAYPES, GET $YAY</h2>
          <Button>Burn to Claim</Button>
        </div>
      )
    },
    {
      id: 'dao',
      label: '🌻 $YAY FARM',
      content: (
        <div>
          <h2>FARM $YAY WITH THE DAO</h2>
          <Button>Join PARTYDAO</Button>
        </div>
      )
    },
    {
      id: 'discord',
      label: '👾 DISCORD',
      content: (
        <div>
          <h2>Join Discord</h2>
          <Button>Join Discord</Button>
        </div>
      )
    }
  ];

  return <TabContainer tabs={tabs} />;
}

