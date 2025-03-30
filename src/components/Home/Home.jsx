"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import apple from "../../Images/apple.png"
import { GoArrowRight } from "react-icons/go";
import hero from "../../Images/hero.png"

import "swiper/css";
import "swiper/css/pagination";
import { context } from '@/Context/ContextData'
import HomeSkeleton from './HomeSkeleton'
const Home = () => {
const {categoriesData,loaddingProducts} = useContext(context)
  
 if(loaddingProducts){
  return <div><HomeSkeleton/></div>
 }
  return <>
  <section>
    <div className=' flex items-start '>
       <aside className='border-r-2 hidden md:block  w-full max-w-[217px]  border-borderColor'>
        <ul className='pt-[40px] flex   flex-col gap-4 items-start w-full pr-[5px] md:pr-4 '>
         
       
         {
          categoriesData?.map((category)=><li key={category.id} className='w-full'>
            <Link href={`/Category/${category.id}`}>{category.name}</Link>
          </li>)
         }

          
        </ul>
       </aside>
       <section className='bg-[#000000] text-white md:ml-[45px] ml-[0px]  w-full   mt-[40px] '>
      


<div className='flex flex-col lg:flex-row max-w-full lg:gap-[30px] items-center justify-center'>

  <section className='pt-[58px] flex flex-col gap-5 pb-[47px] pl-[10px] md:pl-[64px]'>
    <div className='flex items-center gap-[10px] md:gap-[24px]'>
      <Image src={apple} width={40} height={49} alt='apple'/>
      <h1 className='md:text-[16px] text-xl'>iPhone 14 Series</h1>
    </div>
    <h1 className='text-5xl w-full md:w-[294px] font-semibold leading-[1.2]'>Up to 10% off Voucher</h1>
   <div className='flex items-center font-medium gap-2'>
   <Link className='border-b-2 p-1'  href={"/"}>Shop Now 
   </Link>
   <GoArrowRight size={24}/>
   </div>
  </section>
  <section className='pt-4 max-w-full'>
    <Image src={hero} className='object-cover '  alt='hero'/>
  </section>
</div>

       </section>
    </div>
  </section>
  </>
}

export default Home

{/* */}