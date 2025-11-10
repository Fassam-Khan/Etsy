import { AlignLeft } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { headerData } from '@/constant/data'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const MobileSidebar = () => {
  return (
    <div className='md:hidden relative'>
        <Sheet>
  <SheetTrigger><AlignLeft/></SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle><Image src={'/Images/logo.png'} alt='logo' width={100} height={100}/></SheetTitle>
      <SheetDescription className="flex flex-col gap-4 mt-6">
      {headerData.map((item, index) => (
  <Link key={index} href={item.href} className="block hover:text-red-600">
    {item.title}
  </Link>
))}
      
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      
         

      
    </div>

  )
}

export default MobileSidebar
