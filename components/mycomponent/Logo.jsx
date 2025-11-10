import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return (
        <Link href={'/'}>
            <Image src={'/Images/logo.png'} width={180} alt='Weimagine' height={100} />
        </Link>


    )
}

export default Logo