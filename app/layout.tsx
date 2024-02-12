import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'


const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Ploitical Iq',
  description: ' Political IQ is a platform that provides a wide range of courses on politics, diplomacy, and international relations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <ConfettiProvider />
          <ToastProvider />
          {children}
          {/* <Footer /> */}  
        </body>
      </html>
    </ClerkProvider>
  )
}
