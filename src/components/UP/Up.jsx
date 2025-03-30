"use client"
import React, { useEffect, useState } from 'react'
import { LuArrowUp } from "react-icons/lu";

const Up = () => {
    const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
        window.scrollY >= 400 ? setShow(true) : setShow(false);
      });
  }, [])
  const handleTop = ()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return <>
  {
    show && <div onClick={handleTop} className='w-[46px] fixed right-[30px] md:right-[89px] bottom-8 cursor-pointer z-[100] h-[46px] flex items-center justify-center rounded-full transition-all hover:bg-secondary2 hover:text-white bg-secondary'>
    <LuArrowUp size={24}/>
  </div>
  }
  </>
}

export default Up