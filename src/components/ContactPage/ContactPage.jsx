"use client"
import React, { useState } from 'react'
import Broad from '../Broad'
import { SlPhone } from "react-icons/sl";
import { MdOutlineEmail } from 'react-icons/md';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaSpinner } from "react-icons/fa6";

const ContactPage = () => {
    const [isLoadding, setIsLoadding] = useState(false)

    const queryclient = useQueryClient()
    const validationschema = Yup.object({
        name: Yup.string().min(3).required('name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().matches(/^(?:\+?20)?(010|011|012|015)[0-9]{8}$/, "Invalid phone number"),
        subject: Yup.string().min(3),
        message: Yup.string().min(8).required('message is required'),

    })

    // call api 
    const getCintact = async (values) => {
        try {
            setIsLoadding(true)
            const { data } = await axios.post("https://a7mde-commerce.runasp.net/api/Contact/ContactUs", values);
            return data
        }catch (e) {
            console.log("error" + e)
            
        }finally{
            setIsLoadding(false)
        }

}

    const mutation = useMutation({
        mutationKey: ["contact"],
        mutationFn: getCintact,
        onSuccess: (data) => {
            queryclient.invalidateQueries({ mutationKey: ["contact"] })
            Swal.fire({
                icon: "success",
                title: data || "email sent successfully",
            })
        },
        onError: (data) => {
            Swal.fire({
                icon: "error",
                title: data,
            })
        }
    })

    return <>
        <section className='mt-[80px] mb-[140px] mx-[10px] lg:mx-[135px]'>
            <Broad />
            <div className='flex mt-[80px]  flex-col md:flex-row gap-[30px] items-start'>
                <div className='pb-[51px] w-full pr-[35px] rounded md:w-1/3 pl-[35px] shadow-[0px_5px_15px_rgba(0,0,0,0.1)] pt-10'>
                    <div className='pb-8 border-b-2 border-borderColor flex flex-col items-start gap-6'>
                        <div className='flex items-center  gap-4'>
                            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-secondary2 text-white'>
                                <SlPhone size={24} />
                            </div>
                            <p className='font-medium text-[16px]'>Call To Us</p>

                        </div>
                        <div className='flex flex-col items-start gap-4'>
                            <span className='text-sm'>We are available 24/7, 7 days a week.</span>
                            <span className='text-sm'>Phone: +8801611112222</span>
                        </div>

                    </div>
                    <div className='  mt-8 flex flex-col items-start gap-6'>
                        <div className='flex items-center  gap-4'>
                            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-secondary2 text-white'>
                                <MdOutlineEmail size={24} />
                            </div>
                            <p className='font-medium text-[16px]'>Write To US</p>

                        </div>
                        <div className='flex flex-col items-start gap-4'>
                            <span className='text-sm'>Fill out our form and we will contact you within 24 hours.</span>
                            <span className='text-sm'>Emails: customer@exclusive.com</span>
                            <span className='text-sm'>Emails: support@exclusive.com</span>
                        </div>

                    </div>
                </div>
                <div className='md:w-2/3 w-full shadow-[0px_5px_15px_rgba(0,0,0,0.1)] rounded py-10 pl-[31px] pr-[30px]'>
                    <Formik validationSchema={validationschema} onSubmit={values => { mutation.mutate(values) }} initialValues={{ name: "", email: "", phone: "", subject: "", message: "" }} >
                        <Form>
                            <div className='flex w-full flex-col items-start gap-4'>
                                <div className='flex flex-col w-full md:flex-row items-center gap-4'>
                                    <div className='flex w-full md:w-1/2 items-start gap-1 flex-col'>
                                        <ErrorMessage name='name' className=' text-[10px] text-secondary2 ' component={"span"} />
                                        <Field type="text" className="bg-secondary py-[13px] pl-4  focus:outline-none rounded  w-full " name="name" id="Name" placeholder='Your Name *' />

                                    </div>
                                    <div className='md:w-1/2 w-full flex items-start gap-1 flex-col'>
                                        <ErrorMessage name='email' className=' text-[10px] text-secondary2 ' component={"span"} />
                                        <Field type="email" className="bg-secondary py-[13px] pl-4  focus:outline-none rounded  pr-2 w-full" name="email" id="email" placeholder='Your Email *' />

                                    </div>
                                </div>
                                <div className="flex flex-col w-full md:flex-row items-center gap-4">
                                    <div className='flex items-start gap-1 md:w-1/2 w-full flex-col'>
                                        <ErrorMessage name='phone' className=' text-[10px] text-secondary2 ' component={"span"} />
                                        <Field type="tel" className="bg-secondary py-[13px] pl-4  focus:outline-none rounded max-w-full pr-2 w-full " name="phone" id="phone" placeholder='Your Phone *' />

                                    </div>
                                    <div className='flex items-start md:w-1/2 w-full gap-1 flex-col'>
                                        <ErrorMessage name='subject' className=' text-[10px] text-secondary2 ' component={"span"} />
                                        <Field type="text" className="bg-secondary py-[13px] pl-4  focus:outline-none rounded max-w-full pr-2 w-full " name="subject" id="subject" placeholder='Your subject *' />

                                    </div>
                                </div>
                                <div className='flex items-start mt-[30px] w-full gap-1 flex-col'>
                                    <ErrorMessage name='message' className=' text-[10px] text-secondary2 ' component={"span"} />
                                    <Field as="textarea" className='w-full  focus:outline-none  px-4  h-[181px] py-[13px] resize-none  rounded bg-secondary' name="message" id="message" placeholder='Your Massage' />

                                </div>

                                <button type='submit' className='w-full mb-[17px] text-white py-4 px-12 flex items-center justify-center rounded  bg-secondary2 font-medium md:w-fit ml-auto text-[16px] mt-8'>
                                    {
                                        isLoadding? <FaSpinner size={24} className='animate-spin ' /> : <span>Send Massage</span>
                                    }

                                </button>

                            </div>


                        </Form>
                    </Formik>

                </div>
            </div>
        </section>

    </>
}

export default ContactPage