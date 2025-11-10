import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenue from './HeaderMenue'
import { Search } from 'lucide-react'
import CartIcon from './CartIcon'
import FavouriteBtn from './FavouriteBtn'
import Signin from './Signin'
import MobileSidebar from './MobileSidebar'
import { ClerkLoaded, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'


const Header = async () => {
  const user = await currentUser();
  return (
    <header className='py-5 border-b-black/20 border '>
      <Container className='flex justify-between items-center '>
        <div className='flex gap-2 items-center'>
          <MobileSidebar />
          <Logo />
        </div>
        <HeaderMenue />
        <div className='flex gap-3'>
          <Search />
          <CartIcon />
          <FavouriteBtn />
          <ClerkLoaded>
            <UserButton />
            {!user && <Signin />}
          </ClerkLoaded>
        </div>
      </Container>

    </header>
  )
}

export default Header