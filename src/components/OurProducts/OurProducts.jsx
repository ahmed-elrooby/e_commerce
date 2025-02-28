"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoEyeOutline, IoStarSharp } from 'react-icons/io5'
import { myProducts, newProducts } from './myProducts'
import SwiperButtons from '../SwiperButtons/SwiperButtons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Link from 'next/link'
const OurProducts = () => {

  const [swiper, setSwiper] = useState(null)


 
 
return <>
  <section className='md:mt-[71px] mt-[10px]  mb-[20px] md:mb-[140px]'>
      <div className='flex items-end mb-[60px] justify-between'>
       <div className='flex flex-col items-start gap-5'>
       <div className='flex  gap-[24px] items-center justify-between'>
            <span className='w-5 h-10 rounded-[4px] bg-red-500'></span>
            <h1 className='text-[16px] text-secondary2 font-semibold'>Our Products</h1>
          </div>
          <h1 className='md:text-4xl text-[20px] font-semibold'>Explore Our Products</h1>
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
        1024: { slidesPerView: 4, spaceBetween: 30 },
      }}
    >
    {
          myProducts.map((Product)=><SwiperSlide key={Product.id}>
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
        <span className='text-secondary2 font-medium'>${Product.price}</span>
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
    <section 
          className='grid grid-cols-1 md:grid-cols-3 mt-[60px] gap-[30px] lg:grid-cols-4'
         
         >
         {
               newProducts.map((Product)=><div  key={Product.id}>
                 <div className='flex w-full max-w-full md:max-w-[270px] flex-col justify-center gap-4'>
         <div className='  bg-secondary p-4  h-[250px] rounded relative'>
           <div className='flex justify-center'>
           <Image src={Product.img} alt={Product.title}  className='mt-[37px] max-w-full mr-[10px]'    />
           </div>
           {
            Product.new && <span className='text-[12px] absolute top-3 left-3 bg-button text-white py-1 px-3 rounded'>{Product.new? "NEW":""}</span>

           }
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
             <span className='text-secondary2 font-medium'>${Product.price}</span>
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
         <Link href="/" className="font-medium mt-16 block w-fit mx-auto text-white bg-secondary2 px-12 py-4 rounded">View All Products</Link>
         </section>
  </>
}

export default OurProducts