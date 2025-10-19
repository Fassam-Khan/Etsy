'use client'
import React from 'react'

const Hero = () => {
  return (
    <section className=' flex justify-between gap-4 mt-8  '>
      {/* Left Box */}
      <div className=' flex  w-screen ml-4 border-2 border-blue-500 rounded-2xl bg-green-700  h-[400px]'>
        <div className=' w-[60%] m-2  flex justify-center items-center flex-col gap-6 '>
          <h2 className='md:text-4xl text-2xl text-white text-center '>Plan every step<br/>of your wedding</h2>
          <p className='text-white font-bold text-xl text-center  '>All the inspiration you need here</p>
          <button className='bg-white rounded-full md:px-4 md:py-2.5 px-1.5 py-1 cursor-pointer transition-all hover:bg-gray-300 hover:px-4.5 hover:py-3 '>Shop our must haves</button>
        </div>
        <div className=' w-[40%]  bg-[url(/Images/hero.webp)] bg-cover rounded-r-2xl'>
          
        </div>
      </div>
      {/* Right Box */}

      <div></div>

    </section>
  )
}

export default Hero