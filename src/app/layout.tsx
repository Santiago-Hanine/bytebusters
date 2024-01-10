import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({ style: 'normal', weight: ['100', '200','300','400', '500','600', '700', '800', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ByteBusters',
  description: 'Reliable computer repair service in California.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
