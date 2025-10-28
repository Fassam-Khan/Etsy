import React from 'react'
import { blog } from '@/data/blogdata'
import BlogItem from './BlogItem'

const BlogList = () => {
  return (
    <div>
        <div className='flex gap-6 justify-center flex-wrap  mt-10'>
            <button className='cursor-pointer  bg-gray-300 py-1.5 px-4 rounded-4xl'>All</button>
            <button className='cursor-pointer  bg-gray-300 py-1.5 px-4 rounded-4xl'>Electronic</button>
            <button className='cursor-pointer  bg-gray-300 py-1.5 px-4 rounded-4xl'>Web Dovelopment</button>
            <button className='cursor-pointer  bg-gray-300 py-1.5 px-4 rounded-4xl'>Graphic Desinging</button>
            <button className='cursor-pointer  bg-gray-300 py-1.5 px-4 rounded-4xl'>Digital Marketing</button>

        </div>
        <div className='grid md:grid-cols-4 mt-12 grid-cols-1'>
            {blog.map((item,index)=>{
                return <BlogItem key={index} image={item.image_url} title={item.blog_title} description={item.description}/>
            })}
            
        </div>
      
    </div>
  )
}

export default BlogList
