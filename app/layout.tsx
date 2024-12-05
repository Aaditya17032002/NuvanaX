import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NuvanaX',
  description: 'Transform your digital presence with cutting-edge solutions',
  keywords: ['web development', 'digital solutions', 'technology', 'innovation'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

