"use client"
import React from 'react'
import Broad from '../Broad'
import Image from 'next/image'
import about from "../../Images/about.png"
import { CiShop } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import ShoppingBagIcon from "./Shopping.jsx"
import { FaInstagram, FaSackDollar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiTwitter } from "react-icons/fi";
import image1 from "../../Images/image 46.png"
import image2 from "../../Images/image 47.png"
import image3 from "../../Images/image 51.png"
import { RiCustomerServiceLine, RiLinkedinLine, RiShieldCheckLine } from "react-icons/ri";
import Link from 'next/link'
import { TbTruckDelivery } from 'react-icons/tb'


const AboutPage = () => {
    const teamMembers = [
      {
        name: "Tom Cruise",
        role: "Founder & Chairman",
        image: image1, // ضع مسار الصورة الصحيح
      },
      {
        name: "Emma Watson",
        role: "Managing Director",
        image: image2, // ضع مسار الصورة الصحيح
      },
      {
        name: "Will Smith",
        role: "Product Designer",
        image: image3, // ضع مسار الصورة الصحيح
      },{
        name: "Tom Cruise",
        role: "Founder & Chairman",
        image: image1, // ضع مسار الصورة الصحيح
      },
      {
        name: "Emma Watson",
        role: "Managing Director",
        image: image2, // ضع مسار الصورة الصحيح
      },
      {
        name: "Will Smith",
        role: "Product Designer",
        image: image3, // ضع مسار الصورة الصحيح
      },
        
        
      ];
    return <>
        <section className='mb-[140px] mt-[80px] '>
           <div className=' ml-[10px] mr-[10px] md:mr-0 md:ml-[136px]'>
           <Broad />
            <section className='flex items-center flex-col gap-5 lg:gap-0 lg:flex-row mb-[140px] mt-[42px] justify-between w-full'>
                <div className='flex max-w-[525px] w-full flex-col'>
                    <h1 className='text-[54px] font-semibold'>Our Story</h1>
                    <p className='mb-6 text-[16px] leading-[1.7] w-full md:w-[525px] mt-10'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with
                         an active presense in Bangladesh.
                          Supported <br/> by wide range of tailored marketing,
                           data and service solutions,<br/> Exclusive has 10,500
                            sallers and 300 brands and serves 3 millioons 
                            customers across the region. </p>
                            <p className='text-[16px] leading-[1.7] w-full md:w-[505px]'>Exclusive has more than 1 Million products to offer, growing at a <br/> very fast. Exclusive offers a  diverse assotment in categories <br/> ranging  from consumer.</p>
                </div>
                <div className='w-[705px] max-w-full h-[609px]'>
                    <Image src={about} className='object-fill w-full h-full rounded' alt='about' />
                </div>
            </section>
           </div>

            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-[140px] items-center md:mx-[136px] mx-[10px]    gap-[30px]'>
                <div className='border-2 border-borderColor cursor-pointer group  transition-all hover:bg-secondary2 hover:border-secondary2 hover:text-white rounded flex flex-col gap-6 items-center  py-[30px]'>
                    <div className='border-[12px] border-[#C1C0C1] bg-black text-white transition-all group-hover:text-black group-hover:bg-white group-hover:border-[#E67C7C] flex justify-center items-center w-20 h-20 rounded-full'>
                        <CiShop size={40} />

                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='font-semibold text-[32px]'>10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                </div>
                <div className='border-2 border-borderColor cursor-pointer group  transition-all hover:bg-secondary2 hover:border-secondary2 hover:text-white rounded flex flex-col gap-6 items-center  py-[30px]'>
                    <div className='border-[12px] border-[#C1C0C1] bg-black text-white transition-all group-hover:text-black group-hover:bg-white group-hover:border-[#E67C7C] flex justify-center items-center w-20 h-20 rounded-full'>
                        <HiOutlineCurrencyDollar size={40} />

                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='font-semibold text-[32px]'>33k </h1>
                        <p>Mopnthly Produduct Sale</p>
                    </div>
                </div>
                <div className='border-2 border-borderColor cursor-pointer group  transition-all hover:bg-secondary2 hover:border-secondary2 hover:text-white rounded flex flex-col gap-6 items-center  py-[30px]'>
                    <div className='border-[12px] border-[#C1C0C1] bg-black text-white transition-all group-hover:text-black group-hover:bg-white group-hover:border-[#E67C7C] flex justify-center items-center w-20 h-20 rounded-full'>
                        <ShoppingBagIcon />

                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='font-semibold text-[32px]'>10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                </div>
                <div className='border-2 border-borderColor cursor-pointer group  transition-all hover:bg-secondary2 hover:border-secondary2 hover:text-white rounded flex flex-col gap-6 items-center    py-[30px]'>
                    <div className='border-[12px] border-[#C1C0C1] bg-black text-white transition-all group-hover:text-black group-hover:bg-white group-hover:border-[#E67C7C] flex justify-center items-center w-20 h-20 rounded-full'>
                        <FaSackDollar size={40} />

                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='font-semibold text-[32px]'>25k </h1>
                        <p>Anual gross sale in our site</p>
                    </div>
                </div>   
                         </section>

<section className='mb-[140px] md:mx-[136px] mx-[10px]'>
<Swiper
 className=" w-full "
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        640: { slidesPerView: 1 },
      }}
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          
         <div className='bg-borderColor px-[67px] pt-[39px]  max-h-full rounded max-w-full'>
         <Image
              src={member.image}
              alt={member.name}
              className="w-[236px] max-w-full  h-[391px] max-h-full mx-auto object-fill rounded-lg"
            />
         </div>
          <div className='flex mb-4  mt-8 flex-col items-start gap-2'>
          <h3 className="text-lg text-[32px] font-semibold">{member.name}</h3>
          <p className=" ">{member.role}</p>
          </div>
            <div className="flex  gap-4   items-center">
              <Link href={"/"}> 
               <FiTwitter className="hover:text-blue-500 transition-all cursor-pointer" size={24} />
              </Link>
              <Link href={"/"}>
              <FaInstagram  className="hover:text-pink-500 transition-all cursor-pointer" size={24} />

              </Link>
              <Link href={"/"}>
                 <RiLinkedinLine className="hover:text-blue-700 ctransition-all ursor-pointer"  size={24}/>

              </Link>           

            </div>
        </SwiperSlide>
      ))}
    </Swiper>
</section>

          <section>
             <div className='mx-auto'>
                <div className='flex  justify-center flex-wrap gap-[80px]  items-center  '>
                    <div className='flex flex-col gap-6 items-center '>
                        <div className='border-[10px] w-20 h-20 rounded-full flex bg-black items-center justify-center text-white border-borderColor'>
                                <TbTruckDelivery size={40} />
            
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h1 className='text-xl font-semibold w-max '>FREE AND FAST DELIVERY</h1>
                            <span className='text-sm'>Free delivery for all orders over $140</span>
                        </div>
                    </div>
                  
                    <div className='flex flex-col gap-6 items-center '>
                        <div className='border-[10px] w-20 h-20 rounded-full flex bg-black items-center justify-center text-white border-borderColor'>
                                <RiCustomerServiceLine size={40} />
            
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h1 className='text-xl font-semibold w-max '>24/7 CUSTOMER SERVICE</h1>
                            <span className='text-sm'>Friendly 24/7 customer support</span>
                        </div>
                    </div> 
                    <div className='flex flex-col gap-6 items-center '>
                        <div className='border-[10px] w-20 h-20 rounded-full flex bg-black items-center justify-center text-white border-borderColor'>
                                <RiShieldCheckLine size={40} />
            
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h1 className='text-xl font-semibold w-max'>MONEY BACK GUARANTEE</h1>
                            <span className='text-sm w-max'>We reurn money within 30 days</span>
                        </div>
                    </div> 
            
                </div>
                </div>
            </section>               
        </section>
    </>
}

export default AboutPage