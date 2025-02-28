
"use client"
import React, {  useState } from 'react'

import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import Image from 'next/image'
import { IoStarSharp } from "react-icons/io5";
import Link from 'next/link'
import { selling } from './selling'

const SellingProducts = () => {
  // اعمل المنتجات يدوي ملف جيسون وتسجيل الدخول من ال api 


 
 
  return (
    <section className='md:mt-[70px]  mt-[20px]  mb-[100px]'>
        <div className='flex md:flex-row flex-col items-start md:items-end mb-[60px] justify-between'>
         <div className='flex flex-col items-start gap-5'>
         <div className='flex  gap-[24px] items-center justify-between'>
              <span className='w-5 h-10 rounded-[4px] bg-red-500'></span>
              <h1 className='text-[16px] text-secondary2 font-semibold'>This Month</h1>
            </div>
            <h1 className='md:text-4xl text-3xl mb-[20px] md:mb-0 font-semibold'>Best Selling Products</h1>
         </div>

         <div>
           <Link className='font-medium text-white py-4 px-12 rounded   bg-secondary2' href="/">View All</Link>
         </div>
       
        
       
      </div>








       
      <section 
       className='grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:grid-cols-4'
      
      >
      {
            selling.map((Product)=><div  key={Product.id}>
              <div className='flex w-full max-w-full md:max-w-[270px] flex-col justify-center gap-4'>
      <div className='  bg-secondary p-4  h-[250px] rounded relative'>
        <div className='flex justify-center'>
        <Image src={Product.img} alt={Product.title}  className='mt-[37px] max-w-full mr-[10px]'    />
        </div>
        <div className='flex flex-col absolute top-3 right-3 gap-4'>
        <span className='bg-primary flex items-center justify-center rounded-full w-[34px] h-[34px]'>
    <IoIosHeartEmpty  size={24}/>                    
    </span>
    
    <span className='bg-primary flex items-center justify-center  rounded-full w-[34px] h-[34px]'>
                <IoEyeOutline size={24} />
    
                </span>
        </div>
      </div>
    
    
      <div className='flex flex-col gap-2 items-start'>
        <h1 className='font-medium'>{Product.title}</h1>
        <div className='flex items-center gap-3'>
          <span className='text-secondary2 font-medium'>${Product.price}</span>
          <span className='font-medium text-gray-500 line-through'>${Product.discounted}</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex items-center'>
          {[...Array(5)].map((_, index) => (
                        <IoStarSharp
                            key={index}
                            size={20}
                            className={index < Product.stars ? "text-yellow-500" : "text-gray-400"}
                        />
                    ))}
    
          </div>
          <span className='text-gray-500 text-[14px] font-semibold'>({Product.rating})</span>
        </div>
      </div>
    </div>
            </div>)
          }
       
       
      </section>
    </section>
  )
}

export default SellingProducts