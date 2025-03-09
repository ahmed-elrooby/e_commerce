"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const AsideProfle = () => {
    const pathname = usePathname()
    const data =[
        {id:0,text:"My Profile",href:"/MyAccount"},
        {id:1,text:"Change Password",href:"/MyAccount/ChangePassword"},
        {id:2,text:"My Payment Options",href:"/MyAccount/Payment"},
    ]
  return <>
  <aside className='h-full mb-[140px]'>
    <div>
        <h1 className='text-[16px] w-max mb-4 font-medium'>Manage My Account</h1>
        <ul className='flex flex-col gap-2 items-start ml-[35px]'>
            {
                data.map(item=>(
                    <li className={`w-max ${pathname === item.href? ' text-red-500' : ''}`} key={item.id}>
                        <Link href={item.href}>{item.text}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
    <div className='mt-6'>
        <h1 className='text-[16px] w-max mb-4 font-medium'>My Orders</h1>
        <ul className='flex flex-col gap-2 items-start ml-[35px]'>
            <li className='w-max'><Link href={"/"}>My Returns</Link></li>
            <li className='w-max'><Link href={"/"}>My Cancellations</Link></li>
        </ul>
    </div>
  </aside>
  </>
}

export default AsideProfle