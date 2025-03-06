import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { RiShieldCheckLine } from "react-icons/ri";

const Services = () => {
  return <>
  <section className='mb-[140px] '>

    <div className='mx-auto'>
    <div className='flex  justify-center flex-wrap gap-[80px]  items-center  '>
        <div className='flex flex-col gap-6 items-center '>
            <div className='border-[10px] w-20 h-20 rounded-full flex bg-black items-center justify-center text-white border-borderColor'>
                    <TbTruckDelivery size={40} />

            </div>
            <div className='flex flex-col items-start gap-2'>
                <h1 className='text-xl font-semibold w-max '>FREE AND FAST DELIVERY</h1>
                <span className='text-sm'>Free delivery for all orders over $140</span>
            </div>
        </div>
      
        <div className='flex flex-col gap-6 items-center '>
            <div className='border-[10px] w-20 h-20 rounded-full flex bg-black items-center justify-center text-white border-borderColor'>
                    <RiCustomerServiceLine size={40} />

            </div>
            <div className='flex flex-col items-start gap-2'>
                <h1 className='text-xl font-semibold w-max '>24/7 CUSTOMER SERVICE</h1>
                <span className='text-sm'>Friendly 24/7 customer support</span>
            </div>
        </div> 
        <div className='flex flex-col gap-6 items-center '>
            <div className='border-[10px] w-20 h-20 rounded-full flex bg-black items-center justify-center text-white border-borderColor'>
                    <RiShieldCheckLine size={40} />

            </div>
            <div className='flex flex-col items-start gap-2'>
                <h1 className='text-xl font-semibold w-max'>MONEY BACK GUARANTEE</h1>
                <span className='text-sm w-max'>We reurn money within 30 days</span>
            </div>
        </div> 

    </div>
    </div>
  </section>
  </>
}

export default Services