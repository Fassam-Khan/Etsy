import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='mt-10'>
            {/* Prefooter */}
            <div className='flex flex-col items-center bg-[#ccebff] p-7 gap-10  justify-center'>
                <div>
                    <p className=''>Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.</p>
                </div>
                <div>
                    <div className='   outline outline-gray-300 rounded-full md:w-[500px] flex justify-between '>
                        <input type="email" name="" id="" placeholder='Enter your email  ' className='outline-none pl-4 w-full bg-white h-auto rounded-l-full' />
                        <button className= ' transition-all focus:bg-black focus:text-white  pr-4 cursor-pointer hover:bg-black hover:text-white p-2 rounded-r-full bg-white   '>Subscribe</button>
                    </div>
                </div>

            </div>
            {/* Middle footer */}
            <div className='bg-orange-400 md:h-[300px] md:flex p-4 justify-around'>
                <div className='md:w-[30%] w-full flex justify-center items-center flex-col gap-4'>
                    <Link href='/'><Image src='/Images/logo.png' alt='logo' width={150} height={150}/></Link>
                    <button className='bg-orange-200  p-2 rounded-full'>Eplore Our Products</button>
                </div>
                <div className='md:w-[70%] p-4 flex justify-between pr-6'>
                    <div>
                        <p className='font-bold text-white'>Shop</p>
                        <ul>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                        </ul>
                    </div>
                    <div>
                    <p className='font-bold text-white'>Shop</p>
                        <ul>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                        </ul>
                    </div>
                    <div>
                    <p className='font-bold text-white'>Shop</p>
                        <ul>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                            <Link href='/'><li className='mt-3 text-white cursor-pointer font-sm text-sm'>Gift Cards</li></Link>
                        </ul>
                    </div>
                </div>

            </div>
            {/* CopyrightFooter */}
            <div className='bg-black text-white p-2 text-center'>
                All right reserved 
            </div>
        </footer>
    )
}

export default Footer