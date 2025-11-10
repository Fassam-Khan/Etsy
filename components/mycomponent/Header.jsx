import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenue from './HeaderMenue'
import { Search } from 'lucide-react'
import CartIcon from './CartIcon'
import FavouriteBtn from './FavouriteBtn'
import Signin from './Signin'

const Header = () => {
  return (
    <header className='py-5 border-b-black/20 border'>
      <Container className='flex justify-between items-center '>
        <Logo/>
        <HeaderMenue/>
        <div className='flex gap-6'>
          <Search/>
          <CartIcon/>
          <FavouriteBtn/>
          <Signin/>
        </div>
      </Container>

    </header>
  )
}

export default Header