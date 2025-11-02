'use client'
import { useState ,useEffect } from 'react';
import React from 'react'
import { useParams } from 'next/navigation'
import { blog } from '@/data/blogdata';
import Image from 'next/image';
export default function Page() {
  const params = useParams()
  const [data, setdata] = useState(null)
  const fetchBlogData = () => {
    for (let i = 0; i < blog.length; i++) {
      if (Number(params.id) === blog[i].blog_id) {
        setdata(blog[i]);
        console.log(blog[i]);
        break;
      }
    }
  }
  useEffect(() => {
    fetchBlogData();
  
  }, [])


  return (data?<>
    <div className='max-w-[1280px] p-6 m-auto'>
      <div>
        <div className='border '>
        <Image src={data.image_url} width={250} height={300} alt={data.blog_title} className='object-fill' />

        </div>
        
        <h1>{data.blog_title}</h1>
        <p>{data.description}</p>
      </div>
      
    </div>
    </>:<>
    <div>Loading.....</div></>
  )
}
