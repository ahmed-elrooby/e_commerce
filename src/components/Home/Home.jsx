"use client"
import React from 'react'
import test from "../../img/testing.json"
import Lottie from 'react-lottie-player'

const Home = () => {
  return (
    <div>
       <Lottie
      loop
      animationData={test}
      play
      style={{ width: 150, height: 150 }}
    />
    </div>
  )
}

export default Home