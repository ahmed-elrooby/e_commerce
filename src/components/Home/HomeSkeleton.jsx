import React from 'react'
import defaultimg from "../../Images/default.webp"
import Image from 'next/image'

function HomeSkeleton() {
    return <>
        <section className=' flex justify-between items-start mt-20'>
            <aside className=' h-[500px] p-2 hidden md:block  w-1/3 rounded bg-secondary max-w-[217px]  '>

                <ul className='pt-[40px] flex   flex-col gap-6 items-start w-full pr-[5px] md:pr-4 '>
                    {Array(7).fill().map((_, i) => {
                        return (
                            <li key={i} className='bg-white rounded-lg w-full h-[18px] animate-pulse transition-all'></li>
                        )
                    })}
                </ul>
            </aside>
            <section className='flex flex-col px-3 w-2/3 h-[500px] bg-secondary lg:flex-row  lg:gap-[30px] items-center justify-center'>
             <div className='pt-[58px] w-full flex flex-col gap-5 pb-[47px] pl-[10px] '>
                <div className='flex items-center gap-[10px] md:gap-[24px]'>
                  <span className='w-[40px] rounded-lg h-[40px] transition-all animate-pulse bg-white'/>
                  <h1 className='w-[60px] h-[18px] transition-all rounded animate-pulse bg-white'/>
                </div>
                <div className='flex flex-col gap-3 items-start'>
                <h1 className='w-[150px] rounded-lg transition-all animate-pulse h-[15px] bg-white'/>
                <h1 className='w-[150px] rounded-lg transition-all animate-pulse h-[15px] bg-white'/>
                </div>
               <div className='flex items-center  gap-3'>
               <span className='h-[12px] animate-pulse transition-all rounded-lg bg-white w-[50px]'  />
               <span className='h-[12px] animate-pulse transition-all rounded-lg bg-white w-[50px]'/>
               </div>
              </div>
              <div className='pt-4 bg-white animate-pulse transition-all rounded p-2 max-w-full'>
                <Image src={defaultimg} className='object-cover '  alt='hero'/>
              </div>
            </section>
        </section>

    </>
}

export default HomeSkeleton