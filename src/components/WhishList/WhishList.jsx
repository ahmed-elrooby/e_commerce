import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { TbTrash } from "react-icons/tb";
import { BsCart3 } from 'react-icons/bs';
import { products } from './products';
import { IoEyeOutline, IoStarSharp } from 'react-icons/io5';
import { myViewedProducts } from './viewedProducts';


const WhishList = () => {
  return <>
  <section className='mt-[80px] mb-[140px] mx-[10px] lg:mx-[135px]'>
    <div>
<div className='flex justify-between mb-[60px] items-center'>
    <h1 className='text-xl'>Wishlist (4)</h1>
    <Link href="/" className='text-[16px] border-2 border-borderColor py-4 px-12 rounded'>
    Move All To Bag
    </Link>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:grid-cols-4 '>
 {
            products.map((Product)=><div  key={Product.id}>
              <div className=' w-full max-w-full md:max-w-[270px] h-full max-h-full '>
      <div className='  bg-secondary p-4  h-[250px] rounded-t relative'>
        <div className='flex justify-center mb-[25px]'>
        <Image src={Product.img} alt={Product.title}  className='mt-[37px] max-w-full mr-[10px]'    />
        </div>
        <span className='absolute top-3 left-3 bg-secondary2 px-3 py-1 rounded text-white text-[12px]'>-30%</span>
        <span className=' w-[34px] h-[34px] rounded-full bg-white hover:bg-secondary2 transition-all hover:text-white cursor-pointer flex items-center absolute top-3 right-3 justify-center'><TbTrash size={24}/></span>
        <div className='bg-black  w-full absolute -bottom-5 left-0 rounded-b text-white'> 
            <button className=' flex justify-center items-center gap-2 py-2 w-full'><BsCart3 size={24}/>Add To Cart  </button>
        </div>

      </div>
    
      <div className='flex mt-8 flex-col gap-2 items-start'>
        <h1 className='font-medium'>{Product.title}</h1>
         <div className='flex gap-3 items-center'>
         <span className='text-secondary2 font-medium'>${Product.price}</span>
         <span className='font-medium text-gray-500 line-through'>{Product.discounted}</span>
         </div>
       
      </div>
    </div>
            </div>)
          }</div>

          <section className='mt-10'>

            <div className='flex mb-[60px] items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <span className='bg-secondary2 w-5 h-10 rounded'></span>
                    <h1 className='text-xl'>Just For You</h1>
                </div>
                <Link href={"/"} className='font-medium py-4 px-12 border-2 border-borderColor rounded text-[16px]'>See All</Link>
            </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:grid-cols-4 '>
 {
            myViewedProducts.slice(0,4).map((Product)=><div  key={Product.id}>

              <div className=' w-full max-w-full md:max-w-[270px] h-full max-h-full '>
      <div className='  bg-secondary p-4  h-[250px] rounded-t relative'>
        <div className='flex justify-center'>
        <Image src={Product.img} alt={Product.title}  className='mt-[37px] max-w-full object-cover mr-[10px]'    />
        </div>
        
{
Product.rating.length > 0 ?<span className='absolute top-3 left-3 bg-secondary2 px-3 py-1 rounded text-white text-[12px]'>{Product.rating} </span>:Product.isNew && (
  <span className='absolute top-3 left-3 bg-button px-3 py-1 rounded text-white text-[12px]'>
    NEW
  </span>
)

}     
   <span className=' w-[34px] h-[34px] rounded-full bg-white hover:bg-secondary2 transition-all hover:text-white cursor-pointer flex items-center absolute top-3 right-3 justify-center'><IoEyeOutline size={24}/></span>
        <div className='bg-black  w-full absolute -bottom-8 left-0 rounded-b text-white'> 
            <button className=' flex justify-center items-center gap-2 py-2 w-full'><BsCart3 size={24}/>Add To Cart  </button>
        </div>

      </div>
    
      <div className='flex mt-10 flex-col gap-2 items-start'>
        <h1 className='font-medium'>{Product.title}</h1>
         <div className='flex  gap-3 items-center'>
         <span className='text-secondary2 font-medium'>${Product.price}</span>
{Product.discount > 0 &&          <span className='font-medium text-gray-500 line-through'>${Product.discount}</span>
}     
    </div>
         <div className='flex items-center'>
                 {[...Array(5)].map((_, index) => (
                               <IoStarSharp
                                   key={index}
                                   size={20}
                                   className={index < Product.stars ? "text-yellow-500" : "text-gray-400"}
                               />
                           ))}
           
                 </div>
       
      </div>
    </div>
            </div>)
          }</div>
          </section>
    </div>
  </section>
  
  </>
}

export default WhishList