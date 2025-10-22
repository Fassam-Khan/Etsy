import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold'>Your basket</h2>
            <div className='flex justify-between'>
                <div className='outline outline-gray-400 p-6 w-[50%] rounded-xl '>
                    <div className='flex items-center'><Link href="/shop"><span className='cursor-pointer hover:underline'>oangkrisshop</span></Link> <img src="/star.svg" alt="rating" /><span className='text-sm'>4.7(63)</span></div>
                    <div className='flex justify-between'>
                        <div>
                            <img src="" alt="" />

                        </div>
                        <div>
                            USD 11.99
                        </div>
                    </div>

                </div>
                <div></div>

            </div>
        </div>
    )
}

export default page
