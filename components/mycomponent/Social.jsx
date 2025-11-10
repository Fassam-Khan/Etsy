import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'



const Social = () => {
    const socialLinks = [
        {name: 'Facebook'  , url:'https://www.facebook.com/nazarbrotherspk/',icon:<Facebook/>},
        {name: 'Instagram'  , url:'https://www.facebook.com/nazarbrotherspk/',icon:<Instagram/>}

    ]
  return (
    <div className='flex gap-2'>
        {socialLinks.map((item)=>{
            return <Link href={item.url} target='_blank' key={item.name} className='w-10 h-10 rounded-full flex justify-center items-center text-white bg-[#0268a6]'>{item.icon}</Link>
        })}
      
    </div>
  )
}

export default Social
