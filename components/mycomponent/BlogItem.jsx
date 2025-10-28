import React from 'react'
import { blog } from '@/data/blogdata'
import Image from 'next/image'
import Link from 'next/link'

const BlogItem = ({image, title,description }) => {
  return (
    <div className='border rounded w-[250px] '>
        <Image src={image} width={250} height={200}  alt={title} className='object-fill'/>
        <div className='p-2 flex flex-col gap-2'>
        <h2 className='font-semibold text-xl'>{blog[0].blog_title}</h2>
        <p>{description.slice(0,60)}...</p>
        <Link href='/blogs' ><div className='cursor-pointer underline font-semibold'>Read More..</div></Link>
        </div>
      
    </div>
  )
}

export default BlogItem
