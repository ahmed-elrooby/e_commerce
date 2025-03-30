"use client"
import React, { useState } from 'react'
import { links } from './links'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Cookies from 'js-cookie';

const NavMenue = () => {
        let token = Cookies.get("tokenUser");
  
  const [open, setOpen] = useState(false)
    const pathname = usePathname();
  return <>
  <div className='relative'>
{open ?<IoClose className='cursor-pointer active:rotate-180 transition-all' onClick={()=>setOpen((prev)=>!prev)} size={32}/> :< IoIosMenu className='cursor-pointer  transition-all' onClick={()=>setOpen((prev)=>!prev)} size={32}/>}
 {
  open &&  <ul className="flex w-[250px] absolute top-[45px] right-0 flex-col font-medium p-4  gap-4  border bg-red-500 border-gray-100  rounded-lg   ">
  {links.map((item) => (
    <li key={item.id}>
      <Link onClick={()=>setOpen((prev)=>!prev)} href={item.href} className={`block py-2 px-3  lg:p-0 text-gray-900 rounded-sm transition-all capitalize hover:border-b-2 hover:border-[#D9D9D9]  w-full lg:hover:bg-transparent dark:text-white ${pathname === item.href ? "border-b-2 border-[#D9D9D9]" : ""} dark:hover:bg-gray-700 lg:dark:hover:bg-transparent`}>
        {item.content}
      </Link>
    </li>
  ))}
{
  !token && ( <li >
  <Link  onClick={()=>setOpen((prev)=>!prev)} href={"/SignIn"} className={`block py-2 px-3 w-full lg:p-0 text-gray-900 rounded-sm transition-all capitalize hover:border-b-2 hover:border-[#D9D9D9] lg:hover:bg-transparent dark:text-white ${pathname === "/SignIn" ? "border-b-2 border-[#D9D9D9]" : ""} dark:hover:bg-gray-700 lg:dark:hover:bg-transparent`}>
  login
  </Link>
</li>)
}
</ul>
 }
  </div>
  
  
  </>
}

export default NavMenue