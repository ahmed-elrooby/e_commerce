import React from 'react'
import Broad from '../Broad'
import { SlPhone } from "react-icons/sl";
import { MdOutlineEmail } from 'react-icons/md';

const ContactPage = () => {
  return <>
  <section className='mt-[80px] mb-[140px] mx-[10px] lg:mx-[135px]'>
<Broad/>
 <div className='flex mt-[80px]  flex-col md:flex-row gap-[30px] items-start'>
 <div className='pb-[51px] w-full pr-[35px] rounded md:w-1/3 pl-[35px] shadow-[0px_5px_15px_rgba(0,0,0,0.1)] pt-10'>
 <div className='pb-8 border-b-2 border-borderColor flex flex-col items-start gap-6'>
            <div className='flex items-center  gap-4'>
<div className='w-10 h-10 rounded-full flex items-center justify-center bg-secondary2 text-white'>
    <SlPhone size={24}/>
</div>
                <p className='font-medium text-[16px]'>Call To Us</p>

            </div>
            <div className='flex flex-col items-start gap-4'>
            <span className='text-sm'>We are available 24/7, 7 days a week.</span>
            <span className='text-sm'>Phone: +8801611112222</span>
            </div>

        </div>
        <div className='  mt-8 flex flex-col items-start gap-6'>
            <div className='flex items-center  gap-4'>
<div className='w-10 h-10 rounded-full flex items-center justify-center bg-secondary2 text-white'>
    <MdOutlineEmail size={24}/>
</div>
                <p className='font-medium text-[16px]'>Write To US</p>

            </div>
            <div className='flex flex-col items-start gap-4'>
            <span className='text-sm'>Fill out our form and we will contact you within 24 hours.</span>
            <span className='text-sm'>Emails: customer@exclusive.com</span>
            <span className='text-sm'>Emails: support@exclusive.com</span>
            </div>

        </div>
        </div>
        <div className='md:w-2/3 w-full shadow-[0px_5px_15px_rgba(0,0,0,0.1)] rounded py-10 pl-[31px] pr-[30px]'>
        <form action="" >
           <div className='grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           <input type="text"  className="bg-secondary py-[13px] pl-4 rounded max-w-full w-full md:w-[235px]" name="Your Name" id="Name" placeholder='Your Name *' />
            <input type="email" className="bg-secondary py-[13px] pl-4 rounded max-w-full w-full md:w-[235px]"  name="Your Email" id="Email" placeholder='Your Email *' />
            <input type="tel" className="bg-secondary py-[13px] pl-4 rounded max-w-full w-full md:w-[235px]"  name="Your Phone" id="Phone" placeholder='Your Phone *' />
           </div>
           <textarea className='w-full mt-[30px]  px-4  h-[181px] py-[13px] resize-none  rounded bg-secondary'  name="Massage" id="Massage" placeholder='Your Massage' ></textarea>
            <button type='submit' className='w-full mb-[17px] text-white py-4 px-12 rounded block bg-secondary2 font-medium md:w-fit ml-auto text-[16px] mt-8'>Send Massage</button>
        </form>
        </div>
 </div>
  </section>
  
  </>
}

export default ContactPage