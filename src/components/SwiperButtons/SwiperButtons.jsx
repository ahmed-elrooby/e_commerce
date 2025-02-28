import React from 'react'
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

const SwiperButtons = ({swiper}) => {
  return <>
 <div className="flex items-center gap-3">
      <button
        onClick={() => swiper && swiper.slideNext()} 
        className="bg-secondary flex items-center transition-all hover:bg-secondary2 hover:text-white justify-center rounded-full w-[46px] h-[46px]"
      >
<LuMoveLeft size={24} />
</button>
      <button
        onClick={() => swiper && swiper.slidePrev()} 
        className="bg-secondary flex items-center transition-all hover:bg-secondary2 hover:text-white justify-center rounded-full w-[46px] h-[46px]"
      >
        <LuMoveRight size={24} />
      </button>
    </div>  </>
}

export default SwiperButtons