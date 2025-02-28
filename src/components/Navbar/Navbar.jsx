"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FiUser,FiShoppingBag } from "react-icons/fi";

import { usePathname } from "next/navigation";
import { links } from "./links";
import SemiHeader from "../SemiHeader/SemiHeader";
import { LuStar } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";

export default function Navbar() {
  const dropLinks =[
    {id:1,content:"My Order",icon:<FiShoppingBag size={24} />,href:"/"},
    {id:2,content:"My Cancellations",icon:<FiUser size={24} />,href:"/"},
    {id:3,content:"My Reviews",icon:<LuStar size={24} />,href:"/"},
  ]
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false)
  const openUser = (e)=>{
    e.stopPropagation();
    setUser(!user);
  }
useEffect(() => {
 user? window.addEventListener("click",()=>{
  setUser(false)
}):window.removeEventListener("click",()=>{
  setUser(false)})
}, [user])

  return (
<nav className="bg-white border-borderColor border-b-2   borderColor dark:bg-gray-900 sticky top-0 left-0 w-full z-50">
  <SemiHeader />
<div className="pt-[38px] pb-[18px]  mx-[10px] lg:mx-[135px] flex  items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="text-[24px] font-bold">Exclusive</h1>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 items-center gap-[10px] md:gap-[24px] rtl:space-x-reverse">
          <form className="relative hidden md:block">
            <input type="search" className="pl-[20px] py-[7px] focus:outline-none text-[#7D8184] max-w-full w-[243px] bg-[#F5F5F5] border-none rounded-[4px]" placeholder="What are you looking for?" />
            <CiSearch size={24} className="absolute translate-y-[-50%] text-[#7D8184] text-[24px] top-1/2 right-1" />
          </form>
          <div className="flex items-center gap-4 ">
          <CiHeart size={24} className="text-[#7D8184] cursor-pointer" />
          <div className="relative">
            <BsCart3 size={24} className="text-[#7D8184] cursor-pointer" />
            <span className="flex absolute rounded-full w-[16px] h-[16px] text-[12px] -right-1 font-bold -top-1 items-center justify-center bg-secondary2 text-primary">1</span>
          </div>
          <div onClick={openUser} className="w-[34px]  relative h-[34px] text-primary cursor-pointer  flex items-center justify-center rounded-full bg-secondary2">
            <FiUser size={24} className="cursor-pointer" />
            {
              user?<div onClick={(e)=>{e.stopPropagation()}}className="absolute cursor-text rounded w-full min-w-[225px] right-0 top-10 bg-gradient-to-br from-gray-400 via-[#9C79A0] to-black">
               
              <ul className=" pt-[18px] text-sm pr-3   flex flex-col items-start gap-[13px] pl-[20px] text-primary w-full  pb-[10px] ">
              <li className="flex cursor-pointer  items-center gap-4">
                <FiUser  size={32}/>
                Manage My Account
                </li>
              {
              dropLinks.map((e)=><li key={e.id} className="flex  items-center gap-4">
              {e.icon}
              <Link href={e.href}>{e.content}</Link> 
              
              </li>)
              }
               <li className="flex  cursor-pointer items-center gap-4">
                <TbLogout2  size={24}/>
                Logout
                </li>
               
              </ul>
             
              </div>:""
            }
          </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} w-[60%] lg:flex lg:w-[165px] lg:order-0 absolute top-full right-0  shadow-md lg:static lg:shadow-none`}>
        <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border bg-white border-gray-100 lg:border-none rounded-lg  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-1">
            {links.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className={`block py-2 px-3 w-max lg:p-0 text-gray-900 rounded-sm transition-all capitalize hover:border-b-2 hover:border-[#D9D9D9] lg:hover:bg-transparent dark:text-white ${pathname === item.href ? "border-b-2 border-[#D9D9D9]" : ""} dark:hover:bg-gray-700 lg:dark:hover:bg-transparent`}>
                  {item.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </nav>
  );
}
