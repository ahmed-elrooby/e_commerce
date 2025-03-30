"use client"
import dynamic from 'next/dynamic'
import React, { useContext, useState } from 'react'
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false })
import change from "../../Images/changepassword.json"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { context } from '@/Context/ContextData'
import { FaSpinner } from 'react-icons/fa6'


const ChangePasswordPage = () => {
const {validationSchema,initialValue,isLoadding,mutation} = useContext(context)  



  const [show, setShow] = useState({
    oldpass: false,
    NewPass: false,
    confirmednewpass: false
  })
const handleShow =(field)=>{
  setShow((prev)=>({...prev,[field]:!prev[field]}))
 
}
  return <>
    <section className='bg-secondary rounded shadow'>
      <h1 className='text-secondary2 text-center capitalize mb-4 font-medium text-[36px] w-full'>change your password</h1>

      <div className='grid grid-cols-1 pt-4 px-4 w-full items-start md:grid-cols-2'>
        <div className='w-full pb-3'>
          <Formik className="w-full" validationSchema={validationSchema} initialValues={initialValue} onSubmit={(values) => mutation.mutate(values)}>
            <Form className='flex flex-col gap-4 '>
              <div className='flex flex-col gap-1'>
                <div className='relative'>
                  <Field type={`${show.oldpass ? "text" : "password"}`} name="oldpass" className='outline-none w-full focus:outline-none rounded  p-2' placeholder='old Password'  />
                  {show.oldpass? <FaRegEye onClick={()=>{handleShow("oldpass")}
                  } size={20} className='absolute top-2 right-1 cursor-pointer' /> 
                  : <FaEyeSlash onClick={()=>{handleShow("oldpass")}
                  } size={20} className='absolute top-2 right-1 cursor-pointer' />
                  }
                </div>
                <ErrorMessage component="span" name='oldpass' className='text-secondary2 w-full block font-semibold text-[12px]  ' />
              </div>
              <div className='flex flex-col gap-1'>
                <div className='relative'>

                  <Field type={`${show.NewPass?"text":"password"}`} name="NewPass" className='outline-none w-full focus:outline-none rounded  p-2' placeholder='New Password' />
                  {show.NewPass ? <FaRegEye onClick={()=>{handleShow("NewPass")}} size={20} className='absolute top-2 right-1 cursor-pointer' />
                   :
                   <FaEyeSlash onClick={()=>{handleShow("NewPass")}} size={20} className='absolute top-2 right-1 cursor-pointer' />
                  }
                </div>
                <ErrorMessage component="span" name='NewPass' className='text-secondary2 w-full block font-semibold text-[12px]  ' />

              </div>
              <div className='flex flex-col gap-1'>
                <div className='relative'>
                  <Field type={`${show.confirmednewpass?"text":"password"}`} name="confirmednewpass" className='outline-none w-full focus:outline-none rounded  p-2' placeholder='confirm new Password' />
                  {show.confirmednewpass ? <FaRegEye onClick={()=>{handleShow("confirmednewpass")}} size={20} className='absolute top-2 right-1 cursor-pointer' />
                   :
                    <FaEyeSlash onClick={()=>{handleShow("confirmednewpass")}} size={20} className='absolute top-2 right-1 cursor-pointer' />
                  }
                </div>
                <ErrorMessage component="span" name='confirmednewpass' className='text-secondary2 w-full block font-semibold text-[12px]  ' />
              </div>

              <div className='flex items-center justify-between'>
                <button className='border p-2 text-secondary2 border-secondary2 rounded capitalize transition-all hover:bg-secondary2 hover:text-white font-bold' type="submit"> {isLoadding?<FaSpinner size={20} className='animate-spin '/>:"Save"}</button>
                <button type='reset' className='border p-2 text-secondary2 border-secondary2 rounded capitalize transition-all hover:bg-secondary2 hover:text-white font-bold'>cancel</button>
              </div>
            </Form>
          </Formik>
        </div>
        <div >
          <Lottie animationData={change} loop play className='w-full' />
        </div>
      </div>
    </section>

  </>
}

export default ChangePasswordPage