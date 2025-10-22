'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,} from "@/components/ui/dropdown-menu"



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <header className="w-full shadow bg-white  z-50 sticky">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 md:px-8 h-[60px] md:h-[80px]">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <img src="/menue.svg" alt="menu icon" className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Images/logo.png"
              alt="logo"
              width={180}
              height={150}
              className="hidden lg:block"
            />
            <Image
              src="/Images/logo.png"
              alt="logo"
              width={100}
              height={80}
              className="lg:hidden"
            />
          </Link>

          {/* Categories Dropdown (Desktop Only) */}
          <div className="hidden lg:inline-block">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 p-2 hover:bg-gray-200 rounded-full transition cursor-pointer">
                <img src="/menue.svg" alt="menu" className="w-5 h-5" />
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white p-2 rounded-md shadow-md">
                <DropdownMenuItem asChild>
                  <Link href="/">Accessories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/">Art & Craft</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/">Wall Art</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-[40%] sm:w-[60%] md:w-[50%] relative">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full border-2 border-black rounded-full p-2 pl-4 pr-10 text-sm focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-400 p-2 rounded-full">
            <img src="/search.svg" alt="search" className="w-4 h-4" />
          </button>
        </div>

        {/* Right Section (Icons + Sign In) */}
        <div className="flex items-center gap-2">
          <Link href="/my-account"><button className=" md:block cursor-pointer flex"><img src="/user.svg" alt="" className='md:hidden' /><span className='hidden md:inline'>Login/Register</span></button></Link>
         
          <a href="#" className="hidden md:block">
            <button
              title="Favourites"
              className="p-2 hover:bg-orange-200 rounded-full transition cursor-pointer"
            >
              <img src="/heart.svg" alt="favourites " />
            </button>
          </a>
         
          <a href="#" className="hidden md:block cursor-pointer">
            <button
              title="Gifts"
              className="p-2 hover:bg-orange-200 rounded-full transition cursor-pointer"
            >
              <img src="/gift.svg" alt="gifts" />
            </button>
          </a>
          <a href="#">
            <button
              title="Basket"
              className="p-2 hover:bg-orange-200 rounded-full transition cursor-pointer"
            >
              <img src="/cart.svg" alt="basket" />
            </button>
          </a>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center mt-2">
        <ul className="flex gap-4 text-sm md:text-base">
          {[
            'Wall Art',
            'Digital Art & Illustrations',
            'Stationery & Paper Goods',
            'Craft & DIY Designs',
            'Fashion & Merch Designs',
            'Home & Decor',
          ].map((item) => (
            <li
              key={item}
              className="p-2 hover:bg-gray-200 rounded-full cursor-pointer transition"
            >
              <Link href="/products">{item}</Link>
            </li>
          ))}
        </ul>
      </div>

    
    </header>
      {/* Mobile Slide Menu */}
      {menuOpen && (
        <div className="absolute top-0 bg-white w-[70%] h-screen z-50 p-6">
          <div className='flex justify-between '>
            <p className='font-bold'>Browse Categories</p>
            <img src="/cross.svg" alt=""  onClick={() => setMenuOpen(!menuOpen)}/>
          </div>
          <div className='mt-8'>
            <ul >
              <li className='mb-8'><Link href='/'>Art Wall</Link></li>
              <li className='mb-8'><Link href='/'>Art Wall</Link></li>
              <li className='mb-8'><Link href='/'>Art Wall</Link></li>
              <li className='mb-8'><Link href='/'>Art Wall</Link></li>
              <li className='mb-8'><Link href='/'>Art Wall</Link></li>
            </ul>
          </div>

        </div>
      )}
    </>
  )
}

export default Navbar