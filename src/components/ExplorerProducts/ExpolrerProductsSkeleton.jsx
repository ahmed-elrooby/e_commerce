"use client"
import React from 'react'
import defaultimage from "../../Images/default.webp"
import Image from 'next/image'

const ExpolrerProductsSkeleton = () => {
  return <>
  <div className='mt-[100px]'>
  <div className='flex  gap-[24px] items-center '>
              <span className='w-5 h-10 rounded-[4px] bg-red-500'></span>
              <h1 className='text-[16px] text-secondary2 font-semibold'>Related Item</h1>
            </div>
  
  
  
  
  
  
            <section className='grid mt-[50px] items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
     
      {
          Array(8).fill().map((_,i)=> <div key={i} className=' bg-secondary flex gap-3 flex-col justify-center items-start p-3 rounded-md '>
          <div className=' transition-all animate-pulse p-3 rounded bg-white w-full  flex items-center justify-center'>
          <Image src={defaultimage} alt='default' className='object-contain w-auto' width={200} height={150} />
          
          </div>
              <div className='flex flex-col gap-1'>
                  <span className='w-[100px] bg-white rounded h-[13px] transition-all animate-pulse'></span>
                  <span className='w-[50px] bg-white rounded h-[13px] transition-all animate-pulse'></span>
                  <span className='w-[30px] bg-white rounded h-[13px] transition-all animate-pulse'></span>
              </div>
              </div>)
      }
     </section>
  
  </div>
  </>
}

export default ExpolrerProductsSkeleton