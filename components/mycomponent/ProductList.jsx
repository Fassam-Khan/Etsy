import React from 'react'
import { productData } from '@/data/product'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div>
        <div className='grid md:grid-cols-4 grid-cols-2 mt-6 gap-4 gap-y-4' >
        {productData.map((item,index)=>{
            return <ProductCard key={index} link={item.link} title={item.title} price={item.price} category={item.category}  id={item.id} image={item.image}  />
        })}
        </div>


    </div>
  )
}

export default ProductList