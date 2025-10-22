"use client"
import React from 'react'
import { useEffect, useState } from 'react';






const ProductCard = ({product}) => {
  
  

  return (
    <div className='outline outline-gray-300 md:w-[260px] rounded-2xl hover:shadow-xl cursor-pointer relative group  focus:shadow-2xl'>
        <div className='bg-cover md:h-[270px] h-[200px] rounded-t-2xl p-2'><img
    src={product.image || product.images?.[0]}
    alt={product.title}
    className="w-full h-64 object-cover rounded-t-2xl"
  /></div>
        <div className='p-2'>
            <p>{product.title}</p>
            <p className='text-xl text-orange-400'>{product.price}</p>
        </div>
        <span className= 'hidden group-hover:inline transition-all group-focus:inline bg-white rounded-full p-2 absolute top-2 right-2'><img src="heart.svg" alt="" width={16} /></span>

      
    </div>
  )
}

export default ProductCard