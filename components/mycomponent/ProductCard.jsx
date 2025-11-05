import React from 'react'
import { productData } from '@/data/product'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ title, image, price, id , link}) => {
  return (
    <>
    <div className='group hover:border transition-all cursor-pointer'>
      <Link href={`/products/${id}`}>
      <img src={image} alt="" className='object-fill w-full' />
      </Link>
      <div className='p-4 '>
        <h2 className=' text-xl'>{title.slice(0,30)}....</h2>
        <p className='font-bold '>Price: Rs.{price}</p>
        
        
        <Link href={link} target="_blank">
        <button className='hidden group-hover:block bg-orange-400 text-white p-1.5 w-full cursor-pointer'>
          Add to cart
        </button>
        </Link>
        
      </div>
      
    </div>
    </>
   
  )
}

export default ProductCard