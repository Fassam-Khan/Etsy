import React from 'react'
import ProductCard from './ProductCard'
const Feature = () => {
  return (
    <div className='mt-12 p-2'>
        <h2 className='text-2xl font-semibold mb-6 '>Today's big deals</h2>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-2  overflow-auto'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

        </div>
      
    </div>
  )
}

export default Feature