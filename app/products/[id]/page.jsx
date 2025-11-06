"use client"
import { productData } from '@/data/product'
import { useParams } from 'next/navigation'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  const [data, setdata] = useState(null)
  const fetchProductData = () => {
    for (let i = 0; i < productData.length; i++) {
      if ((Number(params.id) === productData[i].id)) {
        setdata(productData[i])
        console.log(productData[i])
        break;
      }


    }

  }
  useEffect(() => {
    fetchProductData();


  }, [])


  const params = useParams()
  return (data ? <>
    <div className='m-4 p-4'>
      {/* Breadcam  */}
      <div>
        <ul>
          <li className='text-sm text-center'>Homepage</li>
        </ul>
      </div>
      {/* product page  */}
      <div className='flex mt-6 gap-16  '>
        {/* Left box  */}
        <div className='w-[50%]  flex gap-4  '>
          <div className='flex flex-col gap-6'>
            <div className='w-24 h-24  border '><img src={data.image} alt="" /></div>


          </div>
          <div className='border rounded-xl '><img src={data.image} alt="" className=' object-fill w-full' /></div>


        </div>
        {/* Right box  */}
        <div className='p-4 flex flex-col gap-4'>
          <p className='font-semibold text-2xl'>PKR {data.price}</p>
          <h2 >{data.title}</h2>
          <Link href={data.link} target='_blank' className='cursor-pointer' >
            <button className='bg-orange-400 text-white p-2 cursor-pointer w-[250px] rounded '>
              Buy Now
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h2>Description</h2>
        <div className='w-[95%]'>
          <p>{data.description}</p>
        </div>
      </div>




    </div>
  </> : <p>Loadings ...</p>
  )
}

export default page