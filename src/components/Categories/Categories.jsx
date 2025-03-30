"use client"
import React, { Fragment, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SwiperButtons from '../SwiperButtons/SwiperButtons'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import Image from 'next/image'
import { IoStarSharp } from "react-icons/io5";
import Link from 'next/link'
import { Products } from '../FlashSales/products'
import { categories } from './CategoriesLinks'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const Categories = () => {
  // اعمل المنتجات يدوي ملف جيسون وتسجيل الدخول من ال api 
  const [swiper, setSwiper] = useState(null)


 

  return (
    <section className='md:mt-[140px] mt-[40px] border-b-2 border-borderColor   pb-[70px]'>
        <div className='flex items-end mb-[60px] justify-between'>
         <div className='flex flex-col items-start gap-5'>
         <div className='flex  gap-[24px] items-center justify-between'>
              <span className='w-5 h-10 rounded-[4px] bg-red-500'></span>
              <h1 className='text-[16px] text-secondary2 font-semibold'>Categories</h1>
            </div>
            <h1 className='text-4xl font-semibold'>Browse By Category</h1>
         </div>

         <div>
            <SwiperButtons swiper={swiper}/>
         </div>
       
        
       
      </div>







       
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={30}
        slidesPerView={6}
        speed={1500}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: { slidesPerView: 1 },
          400: { slidesPerView: 1 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 15 },
        }}
      >
      {
        categories.map((category)=><SwiperSlide key={category.id}>
          <div className='flex transition-all hover:bg-secondary2 hover:text-white pb-[24px] pr-[35px] rounded pl-[34px] pt-[25px] w-full max-w-full md:max-w-[270px]  border border-borderColor items-center  flex-col justify-center gap-4'>
  {category.icon}
  <h1>{category.title}</h1>
</div>
        </SwiperSlide>)
      }
       
       
      </Swiper> 
    </section>
  )
}

export default Categories