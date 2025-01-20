import localFont from 'next/font/local'
import { Providers } from '../providers'
import Header from './components/Header'
import React from 'react'

// Custom pixel font for retro styling
const pixelFont = localFont({ src: './fonts/pixel.woff2' })

// Root layout component that wraps all pages
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Body uses pixel font, dark theme, and repeating pixel background */}
      <body className={`${pixelFont.className} bg-black text-white bg-[url('/pixel-bg.png')] bg-repeat`}>
        <Providers>
          <Header />
          {/* Centered container with standard padding */}
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

