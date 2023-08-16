import './globals.css'
import { Nunito } from 'next/font/google'
import type { Metadata } from 'next'
import Layout from '@app/components/layout/Layout'
import LoginModal from '@app/components/modals/LoginModal'
import RegisterModal from '@app/components/modals/RegisterModal'

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitter - X',
  description: 'Made by Kevin Kipkemboi',
}

export default function RootLayout() {
  return (
    <html lang='en'>
      <body className={font.className}>
        <RegisterModal />
        <LoginModal />
        <Layout />          
      </body>
    </html>
  )
}
