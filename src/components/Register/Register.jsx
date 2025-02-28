import Image from 'next/image'
import React from 'react'
import Loginimage from "../../Images/login.png"
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return <>
  <section className='w-full mt-[60px] mb-[140px] mr-[135px]'>
<div className='w-full flex items-center gap-[129px]'>
  <div >
    <Image src={Loginimage} className='object-cover rounded-r' width={650} height={781} alt='Loginimage'/>
  </div>
  <div className="max-w-[370px] w-full">
 <div className='mb-[48px] flex items-start flex-col gap-6'>
 <h1 className='text-4xl font-medium'>Create an account</h1>
 <span className='text-[16px]'>Enter your details below</span>
 </div>
  <form action="" className='flex flex-col gap-[40px]'>
    <input type="text" name="" className='outline-none focus:outline-none border-b-2 border-borderColor pb-2' placeholder='Name' id="" />
    <input type="email" name="" className='outline-none focus:outline-none border-b-2 border-borderColor pb-2' placeholder='Email or Phone Number' id="" />
    <input type="password" name="" className='outline-none focus:outline-none border-b-2 border-borderColor pb-2' placeholder='Password' id="" />
    <div className='flex flex-col gap-4 items-center w-full justify-between'>
      <button className=' bg-secondary2 w-full py-4 rounded text-primary text-[16px]'>Create Account</button>
<button className='flex items-center gap-4 border border-borderColor rounded w-full py-4 justify-center'><FcGoogle size={24}/> Sign up with Google</button>
<div className='flex items-center gap-4 text-[16px] text-gray-600'>
Already have account? <Link className='border-b-2  border-borderColor text-black' href={"/"}>Log in</Link>
</div>
    </div>
  </form>
  </div>
</div>
  </section>
  </>
}

export default Register