import React from 'react'
import { blog } from '@/data/blogdata'
import { Item } from '@radix-ui/react-dropdown-menu'
import BlogCard from './BlogCard'

const BlogList = ({title,description ,blogid}) => {
  return (
    <div className=' '>
        <div className=''>
        <BlogCard key={blogid} title={title} description={description} />
        </div>


      
    </div>
  )
}

export default BlogList
