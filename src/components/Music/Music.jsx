"use client"
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import music from "../../Images/music.png"
const Music = () => {
  
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
  
  return <>
  <section className=' flex pr-[20px]  md:pr-[44px] py-[69px] flex-col gap-[50px] md:gap-0 items-center  justify-center md:flex-row mb-[71px] bg-black '>
    <section className='md:pl-[56px] pl-[10px] w-full'>
      <h3 className='font-semibold text-button'>Categories</h3>
      <h1 className='font-semibold text-white mb-8 leading-[1.1] text-5xl w-full max-w-[443px] mt-[32px]'>Enhance Your Music Experience</h1>
      <div className='flex items-center mb-[40px] gap-6'>
       {
        [
          
          { label: "Hours", value: hours },
          { label: "Days", value: days },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map((val,idx)=>(<Fragment key={idx}>
          <div className='flex w-[64px] h-[64px] py-[14px] px-[10px] justify-center flex-col bg-white rounded-full items-center  '>
          <p className='font-semibold'>{val.value}</p>

            <p className='text-[11px]'>{val.label}</p>
          </div>
        </Fragment>))
       }
      </div>
      <button className='font-medium py-4 px-12 rounded text-white bg-button'>Buy Now!</button>
     </section>
    <section className="relative brightness-75 w-full max-h-[420px] h-full max-w-[600px] filter">
  <Image 
    src={music} 
    alt="music" 
    className="object-cover relative z-10"
  />

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[50%] bg-[#dddddd8b] opacity-200 blur-[98px]"></div>

  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[50%] bg-[#dddddd8b] opacity-200 blur-[98px]"></div>
</section>
  </section>
  </>
}

export default Music