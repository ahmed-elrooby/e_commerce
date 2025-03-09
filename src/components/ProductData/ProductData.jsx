"use client"
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { IoEyeOutline, IoStarSharp } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { myProducts } from '../OurProducts/myProducts';
import { IoIosHeartEmpty } from 'react-icons/io';
import SwiperButtons from '../SwiperButtons/SwiperButtons';
const ProductData = () => {
  const [product, setProduct] = useState(null);
    const [swiper, setSwiper] = useState(null)
  
const {id} = useParams()

// for calc rating 
const reviews = product?.reviews || []; 
const totalRating = reviews.length > 0 
  ? reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / reviews.length
  : 0; 

const roundedRating = Math.round(totalRating)
console.log(roundedRating)

  const getDataOfProduct = async ()=>{
    const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(data);
      console.log(data)
}


useEffect(() => {
 getDataOfProduct()
}, [])
if (!product) {
  return <p className="text-center text-xl">Loading...</p>;
}
  return <>

  <section className='mx-[10px] md:mx-[136px] mt-20'>
  <nav aria-label="Breadcrumb" className="flex mb-20 ">
    <ol className="flex overflow-hidden ">
      <li className="flex items-center ">
        <Link
          href="/"
          className="flex h-10 items-center gap-1.5 px-2 sm-px-4 transition hover:text-gray-500 "
        >
  
          <span className=" text-sm text-gray-400 font-medium"> Account </span>
        </Link>
      </li>
      <li className="flex items-center ">
        <Link
          href="/"
          className="flex h-10 items-center gap-1.5 px-2 sm-px-4 transition hover:text-gray-500 "
        >
           <span
          className=""
        >
          /
        </span>
  
          <span className="text-sm text-gray-400 font-medium"> {product?.category} </span>
        </Link>
      </li>
  
      <li className="relative flex items-center">
        <span
          className=""
        >
          /
        </span>
  
        <span
          className="flex items-center text-sm  font-medium transition   ps-4"
        >
  {product.title}
        </span>
      </li>
      

      
    </ol>
  </nav>



<section className='flex mb-8 max-h-[600px]  items-start gap-[60px]'>
  <div className='flex items-start  gap-[20px]'>
    <div className='flex flex-col items-start gap-4'>
      {
        product?.images && product.images.map((img, index)=>(
          <div key={index} className='bg-secondary max-w-full rounded w-[170px] h-[138px] flex items-center justify-center'>
                      <Image key={index} className='object-fill  max-w-ful'   src={img}  width={200} height={100} alt={"img"}/>

          </div>
        ))
      }
    </div>
    <div className='bg-secondary max-w-full max-h-full h-[504px] w-[435px] rounded '>
      <Image src={product.thumbnail} className='max-w-full object-fill' alt={product.title} width={446} height={315} />
    </div>
  </div>
  <div>
<div className='flex flex-col gap-4'>
<h1 className='text-2xl  font-semibold'>{product?.title}</h1>
<div className='flex items-center'>
{
      Array.from({length: 5}).map((_,i)=>(  <IoStarSharp
        key={i}
        size={20}
        className={i < roundedRating ? "text-yellow-500" : "text-gray-300"}
      />))
    }
    <span className='text-sm ml-2'>({product?.reviews?.length} Reviews)</span>
</div>
<h1 className='text-2xl'>${product?.price}</h1>
</div>
<p className='text-sm mt-6 pb-6 border-b-2 border-borderColor'>{product.description}</p>
<div className='mt-6 w-full grid grid-cols-5 items-center gap-4'>
  <div className='border  col-span-2 flex items-center border-borderColor rounded'>
    <h1 className='w-1/3 border-r border-borderColor cursor-pointer py-2 transition-all hover:text-white hover:bg-secondary2 flex items-center text-black justify-center'><LuMinus scale={24} /></h1>
    <h1 className='w-1/2 text-[20px] font-medium flex items-center text-center justify-center px-2'>12</h1>
    <h1 className='w-1/3 transition-all text-black cursor-pointer hover:bg-secondary2 flex items-center justify-center py-1 hover:text-white font-bold'><GoPlus size={24}/></h1>
  </div>
  <div className='col-span-2'>
  <button className='text-[16px]   font-medium bg-secondary2 h-full px-3 w-full block text-white  rounded py-1'>Buy Now</button>

  </div>
  <div className='w-10 h-10  border col-span-1 border-borderColor rounded flex items-center justify-center '>
    <CiHeart size={32}/>
  </div>
</div>

<div className='border flex flex-col mt-10 rounded border-borderColor'>
<div className='flex items-center gap-4  px-4 pt-6 pb-4'>
  <div>
<TbTruckDelivery size={40}/>
  </div>
  <div>
    <h1 className='text-[16px] font-medium'>Free Delivery</h1>
    <p className='font-medium w-max text-[12px]'>Enter your postal code for Delivery Availability</p>
  </div>
</div>
<hr/>
<div className='flex items-center gap-4  px-4 pt-6 pb-4'>
  <div>
<TfiReload size={40}/>
  </div>
  <div>
    <h1 className='text-[16px] font-medium'>Return Delivery</h1>
    <p className='font-medium w-max text-[12px]'>Free 30 Days Delivery Returns. Details</p>
  </div>
</div>
</div>
  </div>
</section>


<section className='md:mt-[71px] mt-[10px]  mb-[20px] md:mb-[140px]'>
      <div className='flex items-end mb-[60px] justify-between'>
       <div className='flex flex-col items-start gap-5'>
       <div className='flex  gap-[24px] items-center justify-between'>
            <span className='w-5 h-10 rounded-[4px] bg-red-500'></span>
            <h1 className='text-[16px] text-secondary2 font-semibold'>Related Item</h1>
          </div>
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
      <span className='absolute bg-secondary2 text-white top-3 px-3 py-1 rounded left-3'>-30%</span>
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

         </section>
 
  </section>
  </>
}

export default ProductData