import React from 'react'

const ProductCard = () => {
  return (
    <div className='outline outline-gray-300 md:w-[260px] rounded-2xl hover:shadow-xl cursor-pointer relative group  focus:shadow-2xl'>
        <div className='bg-[url(/Images/hero.webp)] bg-cover md:h-[270px] h-[200px] rounded-t-2xl p-2'></div>
        <div className='p-2'>
            <p>Title</p>
            <p className='text-xl text-orange-400'>PKR 300</p>
        </div>
        <span className= 'hidden group-hover:inline transition-all group-focus:inline bg-white rounded-full p-2 absolute top-2 right-2'><img src="heart.svg" alt="" width={16} /></span>

      
    </div>
  )
}

export default ProductCard