"use client"
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Test = () => {
const getCarts = async ()=>{
    try {
      const { data } = await axios.get(`https://a7mde-commerce.runasp.net/api/Cart`, {
  headers: {
          'Authorization': `Bearer ${Cookies.get('tokenUser')}`,
        },      });
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }

  const {data,isLoading} = useQuery({
    queryKey: ['cartProduct'],
    queryFn: getCarts,
  })
if(isLoading) return <h1>loadding</h1>

  return <>
 <section className='mx-[10px] mt-[80px]    md:mx-[135px]'>
    <div className='grid grid-cols-4   gap-5 '>
  <h1>{data?.length}</h1>
    </div>
    <h1 className='text-red-500'>Hello World</h1>
 </section>
  </>
}

export default Test