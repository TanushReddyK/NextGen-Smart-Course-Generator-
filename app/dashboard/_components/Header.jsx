import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'


function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
        <Image src={'/globe.svg'} width={30} height={50} alt='image'/>
        <UserButton/>
    </div>
  )
}

export default Header
