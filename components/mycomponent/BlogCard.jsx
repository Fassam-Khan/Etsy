import React from 'react'

const BlogCard = ({blog}) => {
    const {title, image, category, blog_id , description} = blog;
  return (
    <div>
        this is blog crad
        <h1>{title}</h1>
        <p>{blog_id}</p>
      
    </div>
  )
}

export default BlogCard
