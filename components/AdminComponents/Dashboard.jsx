import Image from 'next/image'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PlusIcon } from 'lucide-react'


const Dashboard = () => {
  return (
    <div className='bg-[#1d2327]'>
      {/* Top Dasnboard  */}
      <div className='bg-[#1d2327] flex items-center gap-2 '>
        <Image src={'/Images/logo.png'} width={100} height={60} alt='logo' />
        <div>
          <button className='text-emerald-600 px-1.5 text-sm  bg-[#e6f2e8] rounded'>Live</button>
        </div>
        <div className='flex gap-0.5 items-center group relative hover:bg-gray-600 hover:text-blue-500'>
          <PlusIcon className='text-gray-400 w-6 h-6'/> <span className='text-white text-sm group-hover:text-blue-500'>New</span>
          <div className='absolute bottom-[-20px]'>
          <ul>
            <li>hifdfd</li>
          </ul>

        </div>

        </div>
      

        
      </div>

    </div>
  )
}

export default Dashboard
