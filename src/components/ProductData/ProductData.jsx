"use client"
import axios from 'axios';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';
import { IoEyeOutline, IoStarSharp } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { myProducts } from '../ExplorerProducts/myProducts';
import { IoIosHeartEmpty } from 'react-icons/io';
import SwiperButtons from '../SwiperButtons/SwiperButtons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { context } from '@/Context/ContextData';
import ProductDataSkeleton from './ProductDataSkeleton';
const ProductData = () => {
  const {cartData,wishlistData,releatedProducts} = useContext(context)
  const [isFavorite, setIsFavorite] = useState(false); 

  const queryclient = useQueryClient();
  const [quantity, setQuantity] = useState(0)
  const [productId, setProductId] = useState(null)
  const [swiper, setSwiper] = useState(null)
const [thubmnailImg, setIsThubmnailImg] = useState(null)
  const { id } = useParams()
  const router = useRouter()
const totalStars =5 ;

  const getDataOfProduct = async () => {
    try {
      const { data } = await axios.get(`https://a7mde-commerce.runasp.net/api/Produts/Prod/${id}`);
     setProductId(data.id)
      return data;
    } catch (e) {
      console.log("error" + e)
    }

  }
  // handle quantitiy
const decreaseQuantitiy =()=>{
    setQuantity(quantity-1)
  
}
const increaseQuantitiy =()=>{
    setQuantity(quantity+1)
  
}

const { data, isLoading } = useQuery({
  queryKey: ["product"],
  queryFn: getDataOfProduct,
})
// handle add products

const addProduct =async ()=>{

  try{
    
    const isAddedProduct = cartData.some(product => product.id === productId);
    console.log(isAddedProduct)
    if (isAddedProduct) {
      Swal.fire({
        icon: "error",
        title: "This product is already in the cart!",
      });
      return;
    }
    const {data} = await axios.post(`https://a7mde-commerce.runasp.net/api/Cart/AddToCart`,{productId, quantity},{
      headers: {
        'Authorization': `Bearer ${Cookies.get('tokenUser')}`,
      },
    })
   
    return data
  }catch(error){
    console.log("error: " + error)
  }
}

const mutate = useMutation({
  mutationKey: ['cart'],
  mutationFn: addProduct,
  onSuccess: (data) => {
queryclient.invalidateQueries("cart")
    Swal.fire({
          icon: "success",
          title:data.message   ,
        })
  },
 
  },
)


useEffect(() => {
  const isInWishlist = wishlistData?.some(wishlist => wishlist.id === productId);
  setIsFavorite(isInWishlist);
}, [wishlistData, productId]); 

// add wishlist item
const addWhiselistItem = async () => {
  const isInWishlist = wishlistData.some(wishlist => wishlist.id === productId);
  if (isInWishlist) {
    Swal.fire({
      icon: "error",
      title: "This product is already in the wishlist!",
    });
    return;
  }
  try {
    const { data } = await axios.post(
      `https://a7mde-commerce.runasp.net/api/WishList/Add/${productId}`, 
      {},  
      {
        headers: {
          'Authorization': `Bearer ${Cookies.get('tokenUser')}`,
        },
      }
    );

console.log(data)
    return data;
  } catch (error) {
    console.log("error: " + error);
  }
};
const mutateWhishl= useMutation({
  mutationKey: ['wishlist'],
  mutationFn: addWhiselistItem,
 onSuccess:(data)=> {
  queryclient.invalidateQueries("whishlist")
  setIsFavorite(true);
    Swal.fire({
    icon: "success",
    title:data.message || "Added successfuly"   ,
  })
 },
 onError: () => {
  {Swal.fire({
         icon:"error",
         title:"you already add item to whislist",
       })}
   },
})


  useEffect(() => {
    
  if(data?.images){
    setIsThubmnailImg(data?.images.find((img)=> img.isPrimary || data?.images[0]))
  }
 
  }, [data])


  if (isLoading) {
    return <div><ProductDataSkeleton/></div>
  }
  return <>
 
  
    <section className='mx-[10px] md:mx-[136px] mt-20'>
        <nav aria-label="Breadcrumb" className="flex mb-10 lg:mb-20 ">
        <ol className="flex overflow-hidden ">
          <li className="flex items-center ">
            <Link
              href="/"
              className="flex h-10 items-center gap-1.5 px-2 sm-px-4 transition hover:text-gray-500 "
            >

              <span className=" text-sm text-gray-400 font-medium"> Home </span>
            </Link>
          </li>
          <li onClick={()=>{router.back()}} className="relative hidden lg:flex cursor-pointer  items-center">
            <span
              className=""
            >
              /
            </span>

            <span
              className="flex items-center text-sm  font-medium transition   ps-4"
            >
              {data?.categoryName}
            </span>
          </li>
          <li className="relative flex items-center">
            <span
              className="ps-4"
            >
              /
            </span>

            <span
              className="flex items-center text-sm  font-medium transition   ps-4"
            >
              {data?.name}
            </span>
          </li>



        </ol>
      </nav>
     <div className="flex items-start flex-col lg:flex-row gap-[10px] lg:gap-[70px]">
            {/* images */}

     <div className='h-[500px] w-full lg:w-2/3 mb-[140px] overflow-hidden max-h-full flex-col-reverse lg:flex-row flex gap-[30px] items-center lg:items-start'>
      {/* many img */}
<div className='lg:w-1/3  w-full flex bg-secondary rounded h-full justify-center items-center flex-row lg:flex-col gap-2 px-2 lg:p-0 lg:gap-4'>
         {
              data?.images && data.images.map((img, index) => (
                <div key={index} className='bg-white cursor-pointer flex items-center justify-center   max-w-full rounded w-full lg:w-[170px]  h-[132px] max-h-full   '>
                  <Image onClick={()=>setIsThubmnailImg(img)} key={index} className='object-cover h-[80px] lg:h-[100px] w-full mx-2 lg:m-0 lg:w-auto ' src={img.imageUrl} width={112} height={50} alt={"img"} />

                </div>
              ))
            }
</div>
{/* parent images */}
<div className='lg:w-2/3 w-full h-[500px] flex items-center justify-center rounded-md bg-secondary'>
{
              thubmnailImg ? <Image src={thubmnailImg.imageUrl}
               width={446}
               height={250}
              className="lg:w-auto  w-full  object-cover max-h-full max-w-full h-[200px] mx-2 lg:mx-0 lg:h-auto  rounded-md" alt={data.name || "product"} /> :

                null
            }
</div>
</div>
{/* text */}
<div  className='lg:w-1/3 mt-[-100px] lg:mt-0 w-full'>
  <div className='flex flex-col gap-4 items-start'>
  <h1 className='text-2xl w-max  font-semibold'>{data?.name}</h1>
  <div className='flex items-center gap-2'>
        <div className='flex text-yellow-400 items-center'>
        {"★".repeat(data.reviewsinfo.avgStars || 3) + "☆".repeat(totalStars - (data.reviewsinfo.avgStars || 2 ))}

        </div>
        <span className='text-gray-500 text-[14px] font-semibold'>({data.reviewsinfo.reviewsNum})</span>
      </div>
      <h1 className='text-2xl'>${data?.price}</h1>


  </div>
  <p className='text-sm mt-6 pb-6 border-b-2 border-borderColor'>{data.description}</p>
  <div className='mt-6 w-full grid grid-cols-5 items-center gap-4'>
            <div className='border  col-span-2 flex items-center border-borderColor rounded'>
              <button onClick={decreaseQuantitiy} disabled={quantity <= 0} className='w-1/3 disabled:cursor-not-allowed border-r border-borderColor cursor-pointer py-2 transition-all hover:text-white hover:bg-secondary2 flex items-center text-black justify-center'><LuMinus scale={24} /></button>
              <h1 className='w-1/2 text-[20px] font-medium flex items-center text-center justify-center px-2'>{quantity}</h1>
              <button onClick={increaseQuantitiy} className='w-1/3 transition-all text-black cursor-pointer hover:bg-secondary2 flex items-center justify-center py-1 hover:text-white font-bold'><GoPlus size={24} /></button>
            </div>
            <div className='col-span-2'>
            <button 
  onClick={() => { 
    if (quantity > 0) mutate.mutate();
  }} 
  disabled={quantity <= 0} 
  className={`text-[16px] bg-secondary2 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium h-full px-3 w-full block text-white rounded py-1`}
>
  Buy Now
</button>
            </div>
            <button  onClick={()=>{mutateWhishl.mutate()}} className='w-10  h-10 cursor-pointer  border col-span-1 border-borderColor rounded flex items-center justify-center '>
            {
              isFavorite?<FaHeart size={24} className="text-red-500 transition-all duration-300" />:<FaRegHeart size={24} className="text-gray-400 transition-all duration-300" />

            }
            

            </button>
          </div>

          <div className='border flex flex-col mt-10 rounded border-borderColor'>
            <div className='flex items-center gap-4  px-4 pt-6 pb-4'>
              <div>
                <TbTruckDelivery size={40} />
              </div>
              <div>
                <h1 className='text-[16px] font-medium'>Free Delivery</h1>
                <p className='font-medium w-auto lg:w-max text-[12px]'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <hr />
            <div className='flex items-center gap-4  px-4 pt-6 pb-4'>
              <div>
                <TfiReload size={40} />
              </div>
              <div>
                <h1 className='text-[16px] font-medium'>Return Delivery</h1>
                <p className='font-medium lg:w-max w-auto text-[12px]'>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>

</div>
     </div>

     <section className='md:mt-[71px] mt-[10px]  mb-[20px] md:mb-[140px]'>
      <div className='flex items-end mb-[60px] justify-between'>
       <div className='flex flex-col items-start gap-5'>
       <div className='flex  gap-[24px] items-center justify-between'>
            <span className='w-5 h-10 rounded-[4px] bg-red-500'></span>
            <h1 className='text-[16px] text-secondary2 font-semibold'>Related Item</h1>
          </div>
       </div>

       <div>
          <SwiperButtons swiper={swiper}/>
       </div>
    </div>
    <Swiper
      onSwiper={setSwiper}
      spaceBetween={30}
      slidesPerView={6}
      speed={1500}
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        300: { slidesPerView: 1 },
        400: { slidesPerView: 1 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      }}
    >
    {
          releatedProducts?.map((Product)=>
          {
            const cartImage = Product.images?.find((img) => img.isPrimary) || item.images?.[0];

            return(
<SwiperSlide key={Product.id}>
            <Link href={`/ProductDetails/${Product.id}`} className='flex w-full max-w-full md:max-w-[270px] flex-col justify-center gap-4'>
    <div className='  bg-secondary p-4  h-[250px] rounded '>
      <div className='flex justify-center'>
      <Image src={cartImage.imageUrl} alt={"related"} width={100} height={100}   className='mt-[37px] max-w-full object-cover mr-[10px]'     />
      </div>
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
      <h1 className='font-medium'>{Product.name}</h1>
        <span className='text-secondary2 font-medium'>${Product.price}</span>
        <div className='flex items-center gap-2'>
        <div className='flex text-yellow-400 items-center'>
        {"★".repeat(Product.reviewsinfo.avgStars || 3) + "☆".repeat(totalStars - (Product.reviewsinfo.avgStars || 2 ))}

        </div>
        <span className='text-gray-500 text-[14px] font-semibold'>({Product.reviewsinfo.reviewsNum})</span>
      </div>
    </div>
  </Link>
          </SwiperSlide>
            )
          }
          
          )
        }
     
     
    </Swiper>

         </section>
    </section>
  </>
}

export default ProductData