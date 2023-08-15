import './globals.css'
import type { Metadata } from 'next'
import Layout from '@app/components/layout/Layout'
import LoginModal from '@app/components/modals/LoginModal'
import RegisterModal from '@app/components/modals/RegisterModal'



export const metadata: Metadata = {
  title: 'Twitter - X',
  description: 'Made by Kevin Kipkemboi',
}

export default function RootLayout() {
  return (
    <>
      <RegisterModal />
      <LoginModal />
      <Layout />    
    </>
  )
}
