"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Test = () => {
const [allproducts, setAllProducts] = useState([])
const getData = async ()=>{
    const {data} = await axios.get("https://dummyjson.com/products");
setAllProducts(data.products)
}


useEffect(() => {
 getData()
}, [])

  return <>
 <section className='mx-[10px] mt-[80px]    md:mx-[135px]'>
    <div className='grid grid-cols-4   gap-5 '>
    {allproducts.map(product=>(
        <Link href={`/ProductDetails/${product.id}`} className='border p-3 rounded bg-green-500 border-red-500 flex flex-col'  key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </Link>
    ))}
    </div>
    <h1 className='text-red-500'>Hello World</h1>
 </section>
  </>
}

export default Test