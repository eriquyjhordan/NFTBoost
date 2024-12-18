/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const experimental_ppr = true

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} ${inter.variable} ${poppins.variable} antialiased dark `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
