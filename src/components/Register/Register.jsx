"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Loginimage from "../../Images/login.png"
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { FaSpinner } from 'react-icons/fa6'
const Register = () => {
  const [isLoadding, setIsLoadding] = useState(false)

  const router = useRouter()
  const baseUrl = "https://a7mde-commerce.runasp.net/api"
  const queryclient = useQueryClient()
  const initialValues = {

    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",

  }

  const validationschema = Yup.object({
    fullName: Yup.string().min(4, "The name must be at least 4 characters long").required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, " The password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character. ").required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    address: Yup.string().required('Address is required'),

  })

  const createAccount = async (values) => {
    try {
      setIsLoadding(true)
      const { data } = await axios.post(`${baseUrl}/Account/Register`, values)
      return data

    } catch (err) {
      console.log("error:" + err)
    }
    finally {
      setIsLoadding(false)
    }

  }
  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: createAccount,
    onSuccess: (data) => {
      queryclient.invalidateQueries("register")
      Swal.fire({
        icon: "success",
        title: data.message,
        text: "Your account has been successfully registered.",
      }).then(() => { router.push("/SignIn") })
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: error.response?.data?.message,
      })
    },
  })

  return <>
    <section className='w-full mt-[60px] mb-[140px] mr-[135px]'>
      <div className='w-full flex items-center gap-[129px]'>
        <div >
          <Image src={Loginimage} className='object-cover rounded-r' width={650} height={781} alt='Loginimage' />
        </div>
        <div className="max-w-[370px] w-full">
          <div className='mb-[48px] flex items-start flex-col gap-6'>
            <h1 className='text-4xl font-medium'>Create an account</h1>
            <span className='text-[16px]'>Enter your details below</span>
          </div>
          <Formik initialValues={initialValues} validationSchema={validationschema} onSubmit={(values) => mutation.mutate(values)}>
            <Form className='flex flex-col gap-[40px]'>

              <div className='flex flex-col gap-2 items-start w-full'>
                <Field type="text" name="fullName" className='outline-none w-full focus:outline-none border-b-2 border-borderColor pb-2' placeholder='FullName' />
                <ErrorMessage component="span" name='fullName' className='text-secondary2 w-full block font-semibold text-[12px]  ' />
              </div>
              <div className='flex flex-col gap-2 items-start w-full'>
                <Field type="email" name="email" className='outline-none w-full focus:outline-none border-b-2 border-borderColor pb-2' placeholder='email' />
                <ErrorMessage component="span" name='email' className='text-secondary2 w-full block font-semibold text-[12px]  ' />

              </div>
              <div className='flex flex-col gap-2 items-start w-full'>
                <Field type="password" name="password" className='outline-none  w-full focus:outline-none border-b-2 border-borderColor pb-2' placeholder='password' />
                <ErrorMessage component="span" name='password' className='text-secondary2 w-full block font-semibold text-[12px]  '/>

              </div>

              <div className='flex flex-col gap-2 items-start w-full'>
                <Field type="password" name="confirmPassword" className='outline-none w-full focus:outline-none border-b-2 border-borderColor pb-2' placeholder='confirmPassword' />
                <ErrorMessage component="span" name='confirmPassword' className='text-secondary2 w-full block font-semibold text-[12px]  ' />
              </div>
              <div className='flex flex-col gap-2 items-start w-full'>
                <Field type="text" name="address" className='outline-none w-full focus:outline-none border-b-2 border-borderColor pb-2' placeholder='address' />
                <ErrorMessage component="span" name='address' className='text-secondary2 w-full block font-semibold text-[12px]  ' />
              </div>
              <div className='flex flex-col gap-4 items-center w-full justify-between'>
                <button type='submit' className='flex items-center justify-center bg-secondary2 w-full py-4 rounded text-primary text-[16px]'>
                  {
                  isLoadding ? <FaSpinner size={24} className='animate-spin ' /> : <span>Create Account</span>
                  }
                </button>
                <button className='flex items-center gap-4 border border-borderColor rounded w-full py-4 justify-center'><FcGoogle size={24} /> Sign up with Google</button>
                <div className='flex items-center gap-4 text-[16px] text-gray-600'>
                  Already have account? <Link className='border-b-2  border-borderColor text-black' href={"/SignIn"}>Log in</Link>
                </div>
              </div>
            </Form>
          </Formik>

        </div>
      </div>
    </section>
  </>
}

export default Register