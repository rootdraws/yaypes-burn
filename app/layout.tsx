import localFont from 'next/font/local'
import { Providers } from './providers'
import Header from './components/Header'
import React from 'react'

// Custom monospace font
const pixelFont = localFont({ 
  src: '../public/fonts/MEK-Mono.woff2',
  variable: '--font-mek-mono'
})

// Root layout component that wraps all pages
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={pixelFont.className}>
      <body>
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

