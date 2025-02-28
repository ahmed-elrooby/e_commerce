import Link from 'next/link'
import React from 'react'

const SemiHeader = () => {
  return <>
  <section className='bg-black pt-[15px] pb-[17px] text-white'>
    <div className='md:ml-[305px] ml-[30px] flex-col md:flex-row  flex justify-between items-start md:items-center mr-[30px] md:mr-[170px]'>
        <div className="flex items-start md:items-center gap-[2px] md:gap-2">
            <p className='text-[14px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <Link href={"/"} className='border-b-2 font-semibold text-[14px] border-borderColor'>ShopNow</Link>
        </div>
        <div className="">
            <select name="" id="" className='bg-transparent'>

                <option className='bg-black' value="">English</option>
                <option value="">French</option>
                <option value="">Spanish</option>
                <option value="">Chinese</option>
                
        
            </select>
        </div>
    </div> 
  </section>
  </>
}

export default SemiHeader