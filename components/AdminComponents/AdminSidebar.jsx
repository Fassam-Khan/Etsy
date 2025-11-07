import React from 'react'
import Link from 'next/link'

const AdminSidebar = () => {
  return (
    <div className='  bg-white h-full border-r-2 w-full  '>
      <ul className='flex flex-col  p-6 gap-10  w-full '>
        <Link href='/admin'><li>Dashboard</li></Link>
        <Link href='/admin/allproducts'><li>All Products</li></Link>
        <Link href='admin/addproduct'><li>Add Products</li></Link>
        <Link href='admin/orders'><li>Orders</li></Link>
        <Link href='admin/addcategory'><li>Add Category</li></Link>

       
     
      </ul>
      
    </div>
  )
}

export default AdminSidebar
