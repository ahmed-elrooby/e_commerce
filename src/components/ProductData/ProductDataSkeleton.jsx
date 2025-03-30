"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import defaultimg from "../../Images/default.webp"
const ProductDataSkeleton = () => {
  return <>
 <section className='mx-[10px] md:mx-[136px] h-auto mb-[100px] mt-20'>
         <nav aria-label="Breadcrumb" className="flex mb-10 lg:mb-20 ">
               <ol className="flex overflow-hidden ">
                 <li className="flex items-center ">
                  
       
                     <span className=" w-[50px] h-4 bg-secondary transition-all animate-pulse rounded-full">  </span>
                 </li>
                 <li  className="relative hidden lg:flex cursor-pointer  items-center">
                   <span
                     className="ps-3 text-secondary"
                   >
                     /
                   </span>
       
                   <span className="ms-3 w-[50px] h-4 bg-secondary transition-all animate-pulse rounded-full">  </span>

                 </li>
                 <li className="relative flex items-center">
                   <span
                     className="text-secondary ps-3"
                   >
                     /
                   </span>
       
                   <span className="ms-3 w-[50px] h-4 bg-secondary transition-all animate-pulse rounded-full">  </span>

                 </li>
       
       
       
               </ol>
             </nav>
   <div className=' md:h-[450px] h-full flex flex-col md:flex-row gap-[30px] items-start'>
   {/* images */}
    <div className=' w-full md:w-2/3 h-auto flex-col-reverse md:flex-row  flex items-start gap-[50px] md:gap-4'>
    {/* sub imgs */}
<div className='md:w-1/3 w-full flex flex-row  md:flex-col h-auto md:h-[500px]   items-start gap-2  '>
{
  Array(3).fill().map((_, i) => (
    <div 
      key={i} 
      className="bg-secondary flex gap-3 flex-row md:flex-col justify-center items-start p-3 rounded-md"
    >
      <div className="transition-all h-full animate-pulse p-3 rounded bg-white w-full flex items-center justify-center">
        <Image 
          src={defaultimg} 
          alt="default" 
          className="object-contain rounded-md " 
          width={150} 
          height={50} 
        />
      </div>
    </div>
  ))
}



</div>
    {/* parent images */}
<div className='md:w-2/3 w-full bg-secondary py-5 md:py-0 transition-all animate-pulse flex justify-center items-start pt-5   h-full rounded'>
<div className='w-[80%] md:w-(calc[100% - 20%]) h-[400px] flex items-center justify-center rounded-md bg-white px-4'>
<Image 
          src={defaultimg} 
          alt="default" 
          className="object-contain rounded-md w-full " 
          width={300} 
          height={100} 
        />
</div>
</div>
    </div>

    {/* text */}
   <div  className='lg:w-1/3  pt-5 px-2 h-auto py-2 md:py-0 md:h-[450px] rounded-md bg-secondary lg:mt-0 w-full'>
     <div className='flex mb-6 flex-col gap-10 items-start'>
     <h1 className='bg-white rounded-full transition-all animate-pulse w-[240px] h-[15px]'></h1>
     <div className='flex items-center gap-5'>
           <div className='flex transition-all animate-pulse text-[30px] h-[15px]  text-white items-center'>
           {"★".repeat( 3) }
   
           </div>
           <span className='w-[100px] h-3 transition-all animate-pulse bg-white rounded-full'/>
         </div>
         <span className='w-[50px] h-3 transition-all animate-pulse bg-white rounded-full'/>
   
   
     </div>
     <span className='w-full block h-4 transition-all animate-pulse bg-white rounded-full'></span>
     {/* <div className='mt-6 w-full grid grid-cols-5 items-center gap-4'>
               <div className='border  col-span-2 flex items-center border-borderColor rounded'>
                 <button onClick={decreaseQuantitiy} className='w-1/3 border-r border-borderColor cursor-pointer py-2 transition-all hover:text-white hover:bg-secondary2 flex items-center text-black justify-center'><LuMinus scale={24} /></button>
                 <h1 className='w-1/2 text-[20px] font-medium flex items-center text-center justify-center px-2'>{quantity}</h1>
                 <button onClick={increaseQuantitiy} className='w-1/3 transition-all text-black cursor-pointer hover:bg-secondary2 flex items-center justify-center py-1 hover:text-white font-bold'><GoPlus size={24} /></button>
               </div>
               <div className='col-span-2'>
               <button 
     onClick={() => { 
       if (quantity > 0) mutate.mutate();
     }} 
     disabled={quantity <= 0} 
     className={`text-[16px] bg-secondary2 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium h-full px-3 w-full block text-white rounded py-1`}
   >
     Buy Now
   </button>
               </div>
               <button  onClick={()=>{mutateWhishl.mutate()}} className='w-10  h-10 cursor-pointer  border col-span-1 border-borderColor rounded flex items-center justify-center '>
               {
                 isFavorite?<FaHeart size={24} className="text-red-500 transition-all duration-300" />:<FaRegHeart size={24} className="text-gray-400 transition-all duration-300" />
   
               }
               
   
               </button>
             </div> */}
   <div className='flex justify-between gap-3 items-center mt-6'>
    <div className="w-1/2 bg-white transition-all animate-pulse rounded-full h-8"></div>
    <div className="w-1/2 bg-white transition-all animate-pulse h-8 rounded-full"></div>
   </div>
   <div className='flex flex-col gap-4 w-full mt-4 items-center justify-center'>
    <div className='w-[80%] bg-white h-[70px] rounded-lg transition-all animate-pulse'></div>
    <div className='w-[80%] bg-white h-[70px] rounded-lg transition-all animate-pulse'></div>
   </div>
             {/* <div className='border flex flex-col mt-10 rounded border-borderColor'>
               <div className='flex items-center gap-4  px-4 pt-6 pb-4'>
                 <div>
                   <TbTruckDelivery size={40} />
                 </div>
                 <div>
                   <h1 className='text-[16px] font-medium'>Free Delivery</h1>
                   <p className='font-medium w-auto lg:w-max text-[12px]'>Enter your postal code for Delivery Availability</p>
                 </div>
               </div>
               <hr />
               <div className='flex items-center gap-4  px-4 pt-6 pb-4'>
                 <div>
                   <TfiReload size={40} />
                 </div>
                 <div>
                   <h1 className='text-[16px] font-medium'>Return Delivery</h1>
                   <p className='font-medium lg:w-max w-auto text-[12px]'>Free 30 Days Delivery Returns. Details</p>
                 </div>
               </div>
             </div> */}
   
   </div>
   </div>























<div className='mt-[100px]'>
<div className='flex  gap-[24px] items-center '>
            <span className='w-5 h-10 rounded-[4px] bg-red-500'></span>
            <h1 className='text-[16px] text-secondary2 font-semibold'>Related Item</h1>
          </div>






          <section className='grid mt-[50px] items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
   
    {
        Array(8).fill().map((_,i)=> <div key={i} className=' bg-secondary flex gap-3 flex-col justify-center items-start p-3 rounded-md '>
        <div className=' transition-all animate-pulse p-3 rounded bg-white w-full  flex items-center justify-center'>
        <Image src={defaultimg} alt='default' className='object-contain' width={200} height={150} />
        
        </div>
            <div className='flex flex-col gap-1'>
                <span className='w-[100px] bg-white rounded h-[13px] transition-all animate-pulse'></span>
                <span className='w-[50px] bg-white rounded h-[13px] transition-all animate-pulse'></span>
                <span className='w-[30px] bg-white rounded h-[13px] transition-all animate-pulse'></span>
            </div>
            </div>)
    }
   </section>

</div>
  

    
    </section>
  </>
}

export default ProductDataSkeleton