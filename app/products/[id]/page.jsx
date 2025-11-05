"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
   const  params = useParams()
  return (
    <div>
        <h1>This is single product page</h1>
        <p>{params.id}</p>
    </div>
  )
}

export default page