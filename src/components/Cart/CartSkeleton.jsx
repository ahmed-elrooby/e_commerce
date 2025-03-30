import React from 'react'
import defaultimg from "../../Images/default.webp"
import Image from 'next/image'
const CartSkeleton = () => {
  return <>
  <div className='md:mx-[135px] mx-[10px] '>
  <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="shadow-[0px_5px_15px_rgba(0,0,0,0.1)] rounded">
            <th className="p-3 font-normal text-left w-1/3">Product</th>
            <th className="p-2 font-normal w-1/5">Price</th>
            <th className="p-3 font-normal w-1/5">Quantity</th>
            <th className="p-3 font-normal w-1/5">Subtotal</th>
          </tr>
        </thead>
      </table>
      <div className="space-y-3  p-3 bg-white md:space-y-6">
        {Array(4).fill().map((_,idx) =>{

          return(
            <div  key={idx} className="bg-secondary  transition-all shadow-sm hover:shadow-[0px_5px_15px_rgba(0,0,0,0.1)] w-full rounded-lg p-4 flex items-center justify-center md:justify-between">
            <div className="flex items-center flex-col md:flex-row gap-3 w-1/3">
            <div className='bg-white w-[80px] h-[60px] rounded-lg transition-all animate-pulse flex items-center   justify-center'>              <Image src={defaultimg} alt={"cartimage"} width={50} height={50} className="w-auto transition-all hover:scale-[1.1] max-w-full h-auto rounded max-h-full object-cover" />
            </div>
              <span className='h-[20px] rounded-full transition-all animate-pulse w-[90px] bg-white'/>
            </div>
            <div className="w-1/5 h-[20px] rounded-full transition-all animate-pulse bg-white"/>
            <div className="w-1/5 h-[20px] rounded-full transition-all animate-pulse bg-white"/>
            <div className="w-1/5 h-[20px] rounded-full transition-all animate-pulse bg-white"/>
          </div>
          )
        })}
      </div>
  </div>
  
  </>
}

export default CartSkeleton