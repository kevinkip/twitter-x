'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { BsTwitter } from 'react-icons/bs';


const SidebarLogo = () => {

const router = useRouter();

  return (
    <div onClick={() => router.push('/')} 
    className="
    rounded-full
    h-14
    w-14
    p-4
    flex
    "
    >
        <BsTwitter size={28} color="white" />
    </div>
  )
}

export default SidebarLogo