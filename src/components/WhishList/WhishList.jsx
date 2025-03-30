"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
import Image from 'next/image'
import { TbTrash } from "react-icons/tb";
import { BsCart3 } from 'react-icons/bs';
import { IoEyeOutline, IoStarSharp } from 'react-icons/io5';
import { context } from '@/Context/ContextData';
import JustForYou from '../JustForYou/JustForYou';


const WhishList = () => {
  const { wishlistData,releatedProducts } = useContext(context)
  const totalStars=5
  console.log(releatedProducts)
  return <>
    <section className='mt-[80px] mb-[140px] mx-[10px] lg:mx-[135px]'>
      <div>
        <div className='flex justify-between  md:flex-row flex-col gap-3 mb-[60px] items-center'>
          <h1 className='text-xl'>Wishlist ({wishlistData?.length || 0})</h1>
          <Link href="/" className='text-[16px] border-2 border-borderColor py-4 px-12 rounded'>
            Move All To Bag
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[30px] lg:grid-cols-4 '>
         {
          wishlistData?.map((Product) => {
            const image = Product.images?.find((img) => img.isPrimary) || Product.images?.[0];
          
            return (
              <div key={Product.id}>
                <Link href={`/ProductDetails/${Product.id}`} className='w-full max-w-full md:max-w-[270px] h-full max-h-full'>
                  <div className='bg-secondary p-4 h-[250px] rounded-t relative'>
                    <div className='flex justify-center h-full mb-[25px]'>
                      <Image src={image?.imageUrl} width={200} height={50} alt={"img"} className='mt-[37px] object-contain max-w-full h-auto max-h-full w-auto mr-[10px]' />
                    </div>
                    <span className='w-[34px] h-[34px] rounded-full bg-white hover:bg-secondary2 transition-all hover:text-white cursor-pointer flex items-center absolute top-3 right-3 justify-center'>
                      <TbTrash size={24} />
                    </span>
                    <div className='bg-black w-full absolute -bottom-5 left-0 rounded-b text-white'>
                      <button className='flex justify-center items-center gap-2 py-2 w-full'>
                        <BsCart3 size={24} /> Add To Cart
                      </button>
                    </div>
                  </div>
                  <div className='flex mt-8 flex-col gap-2 items-start'>
                    <h1 className='font-medium'>{Product.name}</h1>
                      <span className='text-secondary2 font-medium'>${Product.price}</span>
                      <div className='flex items-center gap-2'>
        <div className='flex text-yellow-400 items-center'>
        {"★".repeat(Product.reviewsinfo.avgStars || 3) + "☆".repeat(totalStars - (Product.reviewsinfo.avgStars || 2 ))}

        </div>
        <span className='text-gray-500 text-[14px] font-semibold'>({Product.reviewsinfo.reviewsNum})</span>
      </div>
                  </div>
                </Link>
              </div>
            );
          })
          
         }
        </div>

       <JustForYou />
      </div>
    </section>

  </>
}

export default WhishList