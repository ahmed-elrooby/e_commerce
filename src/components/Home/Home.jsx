"use client"
import React from 'react'
import test from "../../img/testing.json"
import Lottie from 'lottie-react'

const Home = () => {
  return (
    <div>
        <Lottie animationData={test}
        />
    </div>
  )
}

export default Home