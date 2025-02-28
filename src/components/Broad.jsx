"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Broad = () => {
    const path = usePathname();

  return <>
      <nav aria-label="Breadcrumb" className="flex mb-5 ">
    <ol className="flex overflow-hidden ">
      <li className="flex items-center ">
        <Link
          href="/"
          className="flex h-10 items-center gap-1.5 px-2 sm-px-4 transition hover:text-gray-500 "
        >
  
          <span className="  font-medium"> Home </span>
        </Link>
      </li>
  
      <li className="relative flex items-center">
        <span
          className=""
        >
          /
        </span>
  
        <span
          className="flex items-center  font-medium transition   ps-4"
        >
  {path.split("/")[1]}
        </span>
      </li>
      

      
    </ol>
  </nav>
  
  </>
}

export default Broad