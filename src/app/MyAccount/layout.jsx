
import AccountBroad from '@/components/AccountBroad/AccountBroad'
import AsideProfle from '@/components/AsideProfle/AsideProfle'
import React from 'react'

const layout = ({children}) => {
  return <>
 <div className='mx-[10px] md:mx-[136px] mt-20'>
 <div className='flex items-center mb-20 align-middle justify-between'>
        <div><AccountBroad /></div>
        <h1 className='text-sm flex pb-2 items-start gap-1'>Welcome! <span className='text-secondary2'>   Md Rimel</span></h1>
    </div>
 <div className='flex  gap-[110px] flex-row items-start'>
    <AsideProfle />
<section className='w-full'>
    {children}
</section>
  </div>
 </div>
  </>
}

export default layout
