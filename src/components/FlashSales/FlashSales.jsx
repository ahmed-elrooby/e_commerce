"use client"
import React, { Fragment, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SwiperButtons from '../SwiperButtons/SwiperButtons'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import Image from 'next/image'
import { Products } from './products'
import keyboard from "../../Images/keyboard.png"
import { IoStarSharp } from "react-icons/io5";
import Link from 'next/link'

const FlashSales = () => {
  // اعمل المنتجات يدوي ملف جيسون وتسجيل الدخول من ال api 
  const [swiper, setSwiper] = useState(null)

  const targetDate = new Date("2025-03-20T00:00:00").getTime()
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const getallData = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24))
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((ms / (1000 * 60)) % 60)
    const seconds = Math.floor((ms / 1000) % 60)
    return { days, hours, minutes, seconds }
  }

  const { days, hours, minutes, seconds } = getallData(timeLeft)

  return (
    <section className='md:mt-[140px] mt-[40px] border-b-2 border-borderColor pb-[60px]   '>
     <div className='flex items-end mb-[40px] justify-between'>
        <div className='flex flex-col md:flex-row gap-[20px] md:gap-[87px] items-start md:items-end'>
          <div className='flex items-start flex-col gap-4'>
            <div className='flex  gap-[24px] items-center'>
              <span className='w-5 h-10 rounded-[4px] bg-red-500'></span>
              <h1 className='text-[16px] text-secondary2 font-semibold'>Today’s</h1>
            </div>
            <h1 className='text-[36px] font-semibold'>Flash Sales</h1>
          </div>

          <div className='flex max-w-[302px] items-center gap-[5px] md:gap-[15px]'>
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: seconds },
            ].map((item, idx, arr) => (
              <Fragment key={idx}>
                <div className='flex flex-col items-center gap-[8px] text-[14px] text-primary2'>
                  <p className='text-[12px] font-medium'>{item.label}</p>
                  <h1 className='text-[36px] font-bold'>{String(item.value).padStart(2, "0")}</h1>
                </div>
                {idx < arr.length - 1 && (
                  <div className='flex flex-col gap-[8px] justify-center items-center'>
                    <span className="w-[4px] h-[4px] bg-secondary2 rounded-full"></span>
                    <span className="w-[4px] h-[4px] bg-secondary2 rounded-full"></span>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
        
        <div>
          <SwiperButtons swiper={swiper} />
        </div>
      </div>








       
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={30}
        slidesPerView={3}
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
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
      {
        Products.map((Product)=><SwiperSlide key={Product.id}>
          <div className='flex w-full max-w-full md:max-w-[270px]  flex-col justify-center gap-4'>
  <div className='  bg-secondary p-4  h-[250px] rounded relative'>
    <div className='flex justify-center'>
    <Image src={Product.img} alt={Product.name}  className='mt-[37px] max-w-full mr-[10px]'    />
    </div>
    <div className='flex flex-col absolute top-3 right-3 gap-4'>
    <span className='bg-primary flex items-center justify-center rounded-full w-[34px] h-[34px]'>
<IoIosHeartEmpty  size={24}/>                    
</span>

<span className='bg-primary flex items-center justify-center  rounded-full w-[34px] h-[34px]'>
            <IoEyeOutline size={24} />

            </span>
    </div>
    <span className='absolute top-3 text-[12px] px-3 py-1 rounded bg-secondary2 text-white left-3'>{  Product.percent}%</span>
  </div>


  <div className='flex flex-col gap-2 items-start'>
    <h1 className='font-medium'>{Product.name}</h1>
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
        </SwiperSlide>)
      }
       
       
      </Swiper>
      <Link href="/" className="font-medium mt-16 block w-fit mx-auto text-white bg-secondary2 px-12 py-4 rounded">View All Products</Link>
    </section>
  )
}

export default FlashSales