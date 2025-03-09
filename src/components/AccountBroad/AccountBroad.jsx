"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const AccountBroad = () => {
    const path = usePathname();

  return <>
      <nav aria-label="Breadcrumb" className="flex mb-5 ">
    <ol className="flex overflow-hidden ">
      <li className="flex items-center ">
        <Link
          href="/"
          className="flex h-10 items-center gap-1.5 px-2 sm-px-4 transition hover:text-gray-500 "
        >
  
          <span className="text-sm text-gray-400  font-medium"> Home </span>
        </Link>
      </li>
  
      <li className="relative flex items-center">
        <Link href="/MyAccount"
                  className="flex h-10 items-center gap-1.5 px-2 sm-px-4 transition hover:text-gray-500 "

        >
        <span
          className=""
        >
          /
        </span>
  
        <span
          className="flex items-center  font-medium text-sm transition   ps-4"
        >
  {path.split("/")[1]}
        </span></Link>
      </li>
      {path.split("/")[2]?
        <li className="relative flex items-center">
        <span
          className=""
        >
          /
        </span>
  
        <span
          className="flex items-center  font-medium text-sm transition   ps-4"
        >
  {path.split("/")[2]}
        </span>
      </li>:""
      }
     

      
    </ol>
  </nav>
  
  </>
}

export default AccountBroad