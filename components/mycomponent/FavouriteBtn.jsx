import { HeartIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavouriteBtn = () => {
    return (
        <Link href={'/favourite'} className='group relative font-semibold' >
            <HeartIcon className='w-6 h-6 hover:text-orange-300 transition-all  cursor-pointer' />
            <span className='absolute -top-1 bg-orange-400 text-white w-3.5 h-3.5  font-semibold flex justify-center items-center rounded-full text-sm -right-1'>0</span>
            </Link>
    )
}

export default FavouriteBtn