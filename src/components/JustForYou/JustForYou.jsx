"use client"
import { context } from '@/Context/ContextData'
import Image from 'next/image'
import Link from 'next/link'
import React,{useContext} from 'react'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoEyeOutline } from 'react-icons/io5'

const JustForYou = () => {
    const {releatedProducts} = useContext(context);
    const totalStars = 5;

  return <>
  <section className='mt-[80px]'>
 <div className='mb-[60px] flex justify-between items-center'>
 <div className='flex   gap-4 items-center '>
            <span className='w-5 h-10 rounded-[4px] bg-red-500'></span>
            <h1 className='text-[16px] text-secondary2 font-semibold'>Just For You</h1>
          </div>
          <Link className='border-2 text-[16px] font-medium py-4 px-12 transition-all hover:bg-secondary2 hover:text-white border-black rounded' href={"/AllProducts"}>
          See All
          </Link>
 </div>
          <section className='grid items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
            {
                releatedProducts?.map((ele)=>{
                    const image = ele.images?.find((img) => img.isPrimary === true);
                    return(
                        <Link key={ele.id} href={`/ProductDetails/${ele.id}`}>
                           <div className='flex w-full max-w-full md:max-w-[270px] flex-col justify-center gap-4'>
                            <div className='  bg-secondary p-4  h-[250px] rounded relative'>
                              <div className='flex justify-center'>
                        {
                          image? (<Image src={image.imageUrl} width={100} height={50} alt={ele.name}  className='mt-[37px] max-w-full object-cover mr-[10px]' />) : (<Image src={defaultimg} alt={Product.name}  className='mt-[37px] max-w-full mr-[10px]' />)
                        }
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
                              <h1 className='font-medium'>{ele.name}</h1>
                                <span className='text-secondary2 font-medium'>${ele.price}</span>
                              <div className='flex items-center gap-2'>
                                <div className='flex text-yellow-400 items-center'>
                                {"★".repeat(ele.reviewsinfo.avgStars || 3) + "☆".repeat(totalStars - (ele.reviewsinfo.avgStars || 2 ))}
                        
                                </div>
                                <span className='text-gray-500 text-[14px] font-semibold'>({ele.reviewsinfo.reviewsNum})</span>
                              </div>
                            </div>
                          </div>
                           </Link>
                    )
                })
            }
          </section>
  </section>
  </>
}

export default JustForYou