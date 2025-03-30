"use client"
import React, { useEffect } from 'react'
import Broad from '../Broad'
import axios from 'axios'
import Cookies from 'js-cookie'

const Profile = () => {

const getinfo = async ()=>{
const data = await axios.get("https://a7mde-commerce.runasp.net/api/Account/UserInfo",{
  headers:{
    Authorization: `Bearer ${Cookies.get('tokenUser')}`,
  }
})
console.log(data)
}
useEffect(() => {
getinfo()
}, [])

  return<>
  <section className='shadow-lg w-full mb-[140px] '>
   <div className='px-20 py-10'>
    <h1 className='text-secondary2 mb-4 text-[20px] font-medium'>Edit Your Profile</h1>
    <form action="" className='w-full max-w-[710px]'>
    <div className='w-full mb-6'>
       <div className='flex items-center gap-[50px]'>
       <div className='flex items-start gap-2 w-1/2 flex-col '>
       <label htmlFor="">First Name</label>
       <input type="text" className='  text-[16px] pb-[13px] pt-3 w-full text-gray-500 outline-none focus:outline-none px-4  bg-secondary rounded' name="" id="" defaultValue={"ahmed"}/>
       </div>
       <div className='flex items-start gap-2 w-1/2 flex-col '>
       <label htmlFor="">Last Name</label>
       <input type="text" className='  text-[16px] pb-[13px]  pt-3 w-full text-gray-500 outline-none focus:outline-none  pl-4  bg-secondary rounded' name="" id="" defaultValue={"el rooby"}/>
       </div>
       </div>
       </div>
       <div className='mb-6 w-full'>
       <div className='flex  items-center gap-[50px]'>
       <div className='flex w-1/2 items-start  gap-2 flex-col '>
       <label htmlFor="">Email</label>
       <input type="email" className='pb-[13px] pt-3  text-[16px] outline-none focus:outline-none text-gray-500 w-full  pl-4 bg-secondary rounded' name="" id="" defaultValue={"rimel1111@gmail.com"}/>
       </div>
       <div className='flex items-start w-1/2 gap-2 flex-col '>
       <label htmlFor="">Address</label>
       <input type="text" className='pb-[13px]  text-[16px] pt-3  outline-none focus:outline-none text-gray-500 pl-4 w-full bg-secondary rounded' name="" id="" defaultValue={"Kingston, 5236, United State"}/>
       </div>
       </div>
       </div>
       <div>
        <h1 className='text-[16px] mb-2'>Password Changes</h1>
        <div className='flex flex-col gap-4 items-start w-full'>
        <input type="password" name="" className='w-full bg-secondary outline-none focus:outline-none pt-3 pb-[13px] pl-4 rounded' placeholder='Current Passwod' id="" />
        <input type="password" name="" className='w-full bg-secondary outline-none focus:outline-none pt-3 pb-[13px] pl-4 rounded' placeholder='New Passwod' id="" />
        <input type="password" name="" className='w-full bg-secondary outline-none focus:outline-none pt-3 pb-[13px] pl-4 rounded' placeholder='Confirm New Passwod' id="" />
        </div>
       </div>
       <div className='flex justify-end items-center mt-6 gap-8'>
        <button>Cancel</button>
        <button className='font-medium text-[16px] bg-secondary2 py-4 rounded px-12 text-white'>Save Changes</button>
       </div>
    </form>
   </div>

  </section>
  </>
}

export default Profile