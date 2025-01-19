import localFont from 'next/font/local'
import { Providers } from '../providers'
import Header from './components/Header'
import React from 'react'

const pixelFont = localFont({ src: './fonts/pixel.woff2' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${pixelFont.className} bg-black text-white bg-[url('/pixel-bg.png')] bg-repeat`}>
        <Providers>
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

