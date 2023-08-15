import './globals.css'
import type { Metadata } from 'next'
import Layout from '@components/layout/Layout'
import Modal from '@components/Modal'


export const metadata: Metadata = {
  title: 'Twitter - X',
  description: 'Made by Kevin Kipkemboi',
}

export default function RootLayout() {
  return (
    <>
      <Modal actionLabel='Submit' isOpen title='Test Modal' />
      <Layout />    
    </>

  )
}
