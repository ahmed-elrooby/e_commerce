import Image from 'next/image'
import React from 'react'
import goedkope from "../../Images/goedkope-playstation.png"
import Link from 'next/link'
import wommen from "../../Images/attractive-woman.png"
import perfium from "../../Images/perfuim.png"
import speaker from "../../Images/speakers.png"
const Featured = () => {
  return <>
  <section className='md:mt-[71px] mt-0    mb-[10px] md:mb-[140px]'>
  <div className='flex mb-[60px] flex-col items-start gap-5'>
       <div className='flex  gap-[24px] items-center justify-between'>
            <span className='w-5 h-10 rounded-[4px] bg-red-500'></span>
            <h1 className='text-[16px] text-secondary2 font-semibold'>Featured</h1>
          </div>
          <h1 className='text-4xl font-semibold'>New Arrival</h1>
       </div>
       <section className='grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[30px]'>
        <div className='relative rounded bg-black max-h-[600px] h-full  w-full'>
            <Image src={goedkope} alt='slim' className='object-cover'/>
            <div className='absolute bottom-[10px] md:bottom-[32px] left-4  md:left-8'>
                <h1 className='text-[16px] md:text-[24px] pb-2 md:pb-4 text-[#FAFAFA] font-semibold'>PlayStation 5</h1>
                <p className='max-w-[242px] pb-2 md:pb-4 text-[#FAFAFA] text-[14px] w-full'>Black and White version of the PS5 coming out on sale.</p>
                <Link href={"/"} className="border-b text-white font-medium"> Shop Now</Link>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-4 md:gap-8'>
        <div className=' rounded relative overflow-hidden bg-black max-h-[284px] h-full w-full'>
<Image src={wommen} alt='slim' className=' max-w-[482px] w-full max-h-[286px] h-full object-cover '/>

            <div className='absolute bottom-3  md:bottom-6 left-3 md:left-6 '>
                <h1 className='text-[24px] pb-2 md:pb-4 text-[#FAFAFA] font-semibold'> Women’s Collections</h1>
                <p className='max-w-[255px] pb-2 md:pb-4 text-[#FAFAFA] text-[14px] w-full'>Featured woman collections that give you another vibe.</p>
                <Link href={"/"} className="border-b text-white font-medium"> Shop Now</Link>
            </div>
        </div>  
        <div className='grid grid-cols-2 items-center justify-center gap-[15px] md:gap-[30px]'>
        <div className='bg-black py-[14px] md:py-[31px] px-[15px] md:px-[30px] rounded  relative max-h-[284px] h-full w-full'>
            <Image src={speaker} alt='speaker' className='max-w-[190px] w-full max-h-[221px] h-full object-cover'/>
        <div className='absolute left-3 md:left-6 bottom-3 md:bottom-6'>
        <h1 className='md:text-2xl text-[18px] mb-[0px] md:mb-[6px] text-[#FAFAFA] font-semibold'>Speakers</h1>
            <p className='max-w-[255px] mb-[0px] md:mb-[6px] text-[#FAFAFA] text-[14px] w-full'>Amazon wireless speakers</p>
            <Link href={"/"} className="border-b text-white font-medium"> Shop Now</Link>
        </div>
          </div>



          {/* /////////////////////////////////// */}
          <div className='bg-black py-[14px] md:py-[31px] px-[15px] md:px-[30px] rounded  relative max-h-[284px] h-full w-full'>
            <Image src={perfium} alt='speaker' className='max-w-[190px] w-full max-h-[221px] h-full object-cover'/>
        <div className='absolute left-3 md:left-6 bottom-3 md:bottom-6'>
        <h1 className='md:text-2xl text-[18px] mb-[0px] md:mb-[6px] text-[#FAFAFA] font-semibold'>Perfume</h1>
            <p className='max-w-[255px] mb-[0px] md:mb-[6px] text-[#FAFAFA]  text-[14px] w-full'>GUCCI INTENSE OUD EDP</p>
            <Link href={"/"} className="border-b text-white font-medium"> Shop Now</Link>
        </div>
          </div>
          
          
        </div>
        </div>
       </section>
</section>
  </>
}

export default Featured