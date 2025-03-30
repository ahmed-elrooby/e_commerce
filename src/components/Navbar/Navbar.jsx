"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FiUser,FiShoppingBag } from "react-icons/fi";

import { usePathname, useRouter } from "next/navigation";
import { links } from "./links";
import SemiHeader from "../SemiHeader/SemiHeader";
import { LuStar } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import Cookies from "js-cookie";
import NavIcon from "./NavIcon";
import NavMenue from "./NavMenue";
import SearchBar from "./SearchBar";
import { useQuery } from "@tanstack/react-query";

export default function Navbar() {
  let token = Cookies.get("tokenUser");


 
    const pathname = usePathname();


return (
<nav className="bg-white border-borderColor border-b-2    dark:bg-gray-900 sticky top-0 left-0 w-full z-50">
  <SemiHeader />
  <div className="md:mx-[80px] pt-[38px] pb-[18px]    mx-[10px] relative">
      {/* MOBILE */}
      <div className="h-full flex items-center xl:gap-0 justify-between md:justify-around md:gap-[215px] xl:justify-between xl:hidden">
      <Link href="/" className="flex items-center ">
          <h1 className="text-[24px] font-bold">Exclusive</h1>
        </Link>
        <div className=" flex items-center  gap-1">
          <SearchBar />
          <NavIcon />
          <NavMenue />
        </div>
      
      </div>
      {/* BIGGER SCREENS */}
        {/* LEFT */}
        <div className="hidden xl:flex justify-around gap-12 w-full items-center ">
        <Link href="/" className="flex items-center ">
          <h1 className="text-[24px] font-bold">Exclusive</h1>
        </Link>
         <ul className="hidden xl:flex gap-12">
         {links.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className={`block py-2 px-3 w-max lg:p-0 text-gray-900 rounded-sm transition-all capitalize hover:border-b-2 hover:border-[#D9D9D9] lg:hover:bg-transparent dark:text-white ${pathname === item.href ? "border-b-2 border-[#D9D9D9]" : ""} dark:hover:bg-gray-700 lg:dark:hover:bg-transparent`}>
                  {item.content}
                </Link>
              </li>
            ))}
         {
          !token &&    <li >
          <Link className={`block w-full  py-2 px-3  lg:p-0 text-gray-900 rounded-sm transition-all capitalize hover:border-b-2 hover:border-[#D9D9D9] lg:hover:bg-transparent dark:text-white ${pathname === "/SignIn" ? "border-b-2 border-[#D9D9D9]" : ""} dark:hover:bg-gray-700 lg:dark:hover:bg-transparent`} href={"/SignIn"}>login</Link>
        </li>
         }
         </ul>
         <div className="flex items-center  gap-4">
          <SearchBar />
          <NavIcon />
         

          

        </div>
        </div>
        {/* RIGHT */}
       
    </div>

    </nav>
  );
}
