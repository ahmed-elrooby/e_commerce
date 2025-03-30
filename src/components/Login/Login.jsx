"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Loginimage from "../../Images/login.png"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as Yup from "yup";
import {  useMutation, useQueryClient } from '@tanstack/react-query'
import Swal from 'sweetalert2'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import axios from 'axios'
import Cookies from 'js-cookie'
import { FaSpinner } from 'react-icons/fa6'
const Login = () => {
  const [isLoadding, setIsLoadding] = useState(false)
    const router = useRouter()
    const baseUrl ="https://a7mde-commerce.runasp.net/api"
    const queryClient  = useQueryClient()
    const initialValues={
  
      email: "",
      password: "",
     
  
    }
  
  const validationschema =Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/," The password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character. ").required('Password is required'),
   
  })
  
  const handleLogin =async(values)=>{
    try{
      setIsLoadding(true)
      const {data} = await axios.post(`${baseUrl}/Account/Login`,values)
    
      Cookies.set("tokenUser", data.token, {path: "/"} );
      return data
    }
   catch(error){
      console.log("error",error)
 
   }finally{
    setIsLoadding(false)
   }

   
    
  }
  const mutation = useMutation({
    mutationKey:["login"],
    mutationFn:handleLogin,
    onSuccess: (data) => {
      queryClient .invalidateQueries("login")
      Swal.fire({
      icon: "success",
      title:data.message  || "Login successfully" ,
    }).then(()=>{router.push("/")});

  
  },
    onError: (error) => {
      {Swal.fire({
        icon:"error",
        title:error.response?.data?.message || "Please check your email and try again",
      })}
  },
  })
  
  return <>
  <section className='w-full mt-[60px] mb-[140px] '>
<div className='w-full flex flex-col md:flex-row gap-[20px] md:gap-0 items-start md:items-center justify-between'>
  <div className='w '>
    <Image src={Loginimage} className='object-cover rounded-r' width={650} height={781} alt='Loginimage'/>
  </div>
  <div className="w-[370px]  max-w-full mx-[10px] md:mx-[135px]">
 <div className='mb-[48px] flex items-start flex-col gap-12'>
 <h1 className='text-4xl font-medium'>Log in to Exclusive</h1>
 <span className='text-[16px]'>Enter your details below</span>
 </div>

 <Formik initialValues={initialValues} validationSchema={validationschema}  onSubmit={(values, { setSubmitting }) => {
    mutation.mutate(values, {
        onSettled: () => setSubmitting(false),
    });
}}>
  <Form className='flex w-[calc(100%-20px)] md:w-[371px] max-w-full justify-center flex-col gap-[40px]'>
    
    
    <div className='flex flex-col gap-2 items-start w-full'>
          <Field type="email" name="email" className='outline-none w-full focus:outline-none border-b-2 border-borderColor pb-2' placeholder='Email'/>
          <ErrorMessage component="span" name='email' className='text-secondary2 w-full block font-semibold text-[12px]  ' />

</div>
<div className='flex flex-col gap-2 items-start w-full'>
      <Field type="password" name="password" className='outline-none  w-full focus:outline-none border-b-2 border-borderColor pb-2' placeholder='Password'/>
      <ErrorMessage component="span" name='password' className='text-secondary2 w-full block font-semibold text-[12px]' />

</div>
<div className='flex flex-col md:flex-row  gap-2 md:gap-0 items-center justify-between'>
<button type='submit' className='font-medium bg-secondary2 w-full md:w-fit py-4 px-2 md:px-12 text-primary text-[16px] flex items-center justify-center'>
                                    {isLoadding ? 
                                        <FaSpinner size={24} className='animate-spin' /> : 
                                        <span className='w-full'>Log In</span>
                                    }
                                </button>
      <Link className='text-secondary2' href={"/ForgetPassword"}>Forget Password?</Link>
    </div>
    <Link className='text-secondary2 capitalize font-semibold text-center' href={"/SignUp"}>doesn't have an account ?</Link>

</Form>
</Formik>


  </div>
</div>
  </section>
  </>
}

export default Login