"use client"
import React from 'react'

const RelatedProducts = () => {

      const getAllProducts = async ()=>{
        try{
          const {data} = await axios.get("");
          return data
        }catch(e){
          console.log(e)
        }
       
    }
    
    const {data,isLoading} =useQuery(
     {
        querykey :['product'],
        queryFn : getAllProducts,
     }
        
    )
  return <>
   <section className='grid grid-cols-1 md:grid-cols-3 mt-[60px] gap-[30px] lg:grid-cols-4'
         
         >
         {
               newProducts.map((Product)=><div  key={Product.id}>
                 <div className='flex w-full max-w-full md:max-w-[270px] flex-col justify-center gap-4'>
         <div className='  bg-secondary p-4  h-[250px] rounded relative'>
           <div className='flex justify-center'>
           <Image src={Product.img} alt={Product.title}  className='mt-[37px] max-w-full mr-[10px]'    />
           </div>
           {
            Product.new && <span className='text-[12px] absolute top-3 left-3 bg-button text-white py-1 px-3 rounded'>{Product.new? "NEW":""}</span>

           }
           <div className='flex flex-col absolute top-3 right-3 gap-4'>
           <span className='bg-primary flex items-center justify-center rounded-full w-[34px] h-[34px]'>
       <IoIosHeartEmpty  size={24}/>                    
       </span>
       
       <span className='bg-primary flex items-center justify-center  rounded-full w-[34px] h-[34px]'>
                   <IoEyeOutline size={24} />
       
                   </span>
           </div>
         </div>
       
       
         <div className='flex flex-col gap-2 items-start'>
           <h1 className='font-medium'>{Product.title}</h1>
             <span className='text-secondary2 font-medium'>${Product.price}</span>
           <div className='flex items-center gap-2'>
             <div className='flex items-center'>
             {[...Array(5)].map((_, index) => (
                           <IoStarSharp
                               key={index}
                               size={20}
                               className={index < Product.stars ? "text-yellow-500" : "text-gray-400"}
                           />
                       ))}
       
             </div>
             <span className='text-gray-500 text-[14px] font-semibold'>({Product.rating})</span>
           </div>
         </div>
       </div>
               </div>)
             }
          </section>
          
  </>
}

export default RelatedProducts