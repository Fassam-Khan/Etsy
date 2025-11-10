import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const Signin = () => {
  return (
    <SignInButton mode='modal'>
      <button>
        Login
      </button>
      
    </SignInButton>
  )
}

export default Signin
