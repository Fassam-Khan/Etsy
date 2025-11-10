"use client"
import { headerData } from '@/constant/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderMenue = () => {
    const pathName = usePathname();
  return (
    <div className='hidden md:inline-flex gap-6 items-center w-1/3 '>
        {headerData?.map((item)=>{
            return <Link href={item?.href} key={item?.title} className={`hover:text-orange-300 relative group ${pathName === item?.href && "text-orange-300"}`} >
            {item?.title}
            <span className={`absolute bottom-0 h-0.5 bg-orange-300 w-0 group-hover:w-full transition-all  left-0 ${pathName === item?.href && "w-full"}`}/>
            </Link>

        })}
    </div>
  )
}

export default HeaderMenue