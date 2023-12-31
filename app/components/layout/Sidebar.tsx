import React from 'react'
import SidebarLogo from './SidebarLogo'
import {BsHouseFill, BsBellFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'
import SidebarItem from './SidebarItem'
import SidebarTweetButton from './SidebarTweetButton'

const Sidebar = () => {
    const items = [
        {
            label: "Home",
            href: "/",
            icon: BsHouseFill
        },
        {
            label: "Notifications",
            href: "/notifications",
            icon: BsBellFill
        },
        {
            label: "Profile",
            href: "/users/123", //needs to lead to specific ID. No API yet.
            icon: FaUser
        }
    ] //an array of objects.
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className="flex flex-col items-end">
            <div className="space-y-2 lg:w-[230px]">
                <SidebarLogo />
                {items.map((item) => (
                    <SidebarItem 
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                    />
                ))}
                <SidebarItem onClick={() => {}} icon={BiLogOut} label="logout" />
                <SidebarTweetButton />
            </div>
        </div>
    </div>
  )
}

export default Sidebar