import React from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

const CartIcon = () => {
  return (
    <Link href={'/cart'} className='group relative font-semibold'>
        <ShoppingBag className='w-6 h-6 hover:text-orange-300 transition-all  cursor-pointer'/>
        <span className='absolute -top-1 bg-orange-400 text-white w-3.5 h-3.5  font-semibold flex justify-center items-center rounded-full text-sm -right-1'>0</span>
    </Link>
  )
}

export default CartIcon