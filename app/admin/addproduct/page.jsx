import React from 'react'

const page = () => {
  return (
    <>
    <form className=' p-4 flex flex-col gap-4 ' >
      <input type="text" placeholder='Product Name'  className='p-2 rounded outline  w-[70%]'/>
      <label className="">Product Description</label>
      <textarea name="" id="" cols="30" rows="10" className='border p-1.5 w-[70%]'>

      </textarea>
      <label className="">Product Short Description</label>
      <textarea name="" id="" cols="30" rows="5" className='border p-1.5 w-[70%]'>
      </textarea>
      <div className='flex gap-4 items-center'>
      <span>Price:</span><input type="number" placeholder='Enter a price' className='p-2 rounded outline w-[200px]' />
      </div>
      <div className='flex gap-4 items-center'>
      <span>Category:</span><input type="text" placeholder='Enter a category' className='p-2 rounded outline w-[200px]' />
      </div>
      

    </form>
    </>
  )
}

export default page
