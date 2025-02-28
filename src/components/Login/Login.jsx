import Image from 'next/image'
import React from 'react'
import Loginimage from "../../Images/login.png"
import Link from 'next/link'
const Login = () => {
  return <>
  <section className='w-full mt-[60px] mb-[140px] mr-[135px]'>
<div className='w-full flex items-center gap-[129px]'>
  <div >
    <Image src={Loginimage} className='object-cover rounded-r' width={650} height={781} alt='Loginimage'/>
  </div>
  <div className="max-w-[370px] w-full">
 <div className='mb-[48px] flex items-start flex-col gap-12'>
 <h1 className='text-4xl font-medium'>Log in to Exclusive</h1>
 <span className='text-[16px]'>Enter your details below</span>
 </div>
  <form action="" className='flex flex-col gap-[40px]'>
    <input type="email" name="" className='outline-none focus:outline-none border-b-2 border-borderColor pb-2' placeholder='Email or Phone Number' id="" />
    <input type="password" name="" className='outline-none focus:outline-none border-b-2 border-borderColor pb-2' placeholder='Password' id="" />
    <div className='flex items-center justify-between'>
      <button className='font-medium bg-secondary2 py-4 px-12 text-primary text-[16px]'>Log In</button>
      <Link className='text-secondary2' href={"/"}>Forget Password?</Link>
    </div>
  </form>
  </div>
</div>
  </section>
  </>
}

export default Login