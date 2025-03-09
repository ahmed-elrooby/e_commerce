import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return <>
  <section className='mx-[10px] md:mx-[136px] mb-[140px] mt-20'>
  <nav aria-label="Breadcrumb" className="flex mb-[140px] ">
    <ol className="flex overflow-hidden ">
      <li className="flex items-center ">
        <Link
          href="/"
          className="flex h-10 items-center gap-1.5 px-2 sm-px-4 transition hover:text-gray-500 "
        >
  
          <span className="text-gray-400 text-sm  font-medium"> Home </span>
        </Link>
      </li>
  
      <li className="relative flex items-center">
        <span
          className=""
        >
          / 404 Error
        </span>
  
        <span
          className="flex items-center  font-medium transition   ps-4"
        >
  
        </span>
      </li>
      

      
    </ol>
  </nav>
   <div className='flex items-center justify-center flex-col'>
     <h1 className='text-[110px] font-medium mb-[40px]'>404 Not Found</h1>
    <p className='text-[16px] mb-20'>Your visited page not found. You may go home page.</p>
    <Link className='bg-secondary2 text-[16px] font-medium py-4 px-12 text-white hover:bg-transparent hover:text-black hover:border-2 hover:border-borderColor rounded' href="/">Back to home page</Link></div>
  </section>
  </>
}

export default NotFound