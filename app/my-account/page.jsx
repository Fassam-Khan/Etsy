"use client"
import React from 'react'
import Login from "@/components/mycomponent/Login"
import {useState} from 'react'
import Register from "@/components/mycomponent/Register"
const page = () => {
    const [isLogin, setisLogin] = useState(true)
    const toggle = ()=>{
        setisLogin(!isLogin)
    }
  return (
    <div className='flex justify-between flex-wrap max-w-[1280px] m-auto mt-10 gap-6 p-4'>
        <div className='md:w-[50%] w-[100%] flex flex-col '>
        {isLogin ? (
        <Login  />
      ) : (
        <Register/>
      )}
        </div>
        <div className='md:w-[48%] w-[100%] flex flex-col gap-4 items-center text-center'>
            <h4>Register</h4>
            <p>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
            <button onClick={toggle} className='bg-orange-500 text-white cursor-pointer p-2'>{isLogin ? (
                "Register" ) : (
                    "Login"
                )}
                </button>
        </div>

    </div>
  )
}

export default page
