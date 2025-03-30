"use client"
import dynamic from "next/dynamic"
import password from "../../Images/forgetPassword.json"
import React from "react"
import { Field, Form, Formik } from "formik"
const Lottie = dynamic(()=> import("react-lottie-player"))
const ForgetPass =()=>{
    return <>
    
    <section className="mx-[10px] mt-[100px] mb-[50px] md:mx-[135px]">
    <h1 className='text-secondary2 text-center capitalize mb-4 font-medium text-[30px] w-full'> password recovery</h1>
    <div className='grid grid-cols-1 pt-4 px-4 w-full items-start md:grid-cols-2'>
<Formik>
    <Form>
        <Field type ="email" placeholder="enter your email" className='outline-none w-full focus:outline-none border-b-2 border-borderColor rounded  p-2'/>
    </Form>
</Formik>


    

{/* for image  */}

<div>
    <Lottie className="w-full" animationData={password} loop play/>
</div>
</div>



    </section>
    </>
}
export default ForgetPass;