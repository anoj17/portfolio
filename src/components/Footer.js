import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-ful flex justify-around items-center border-t-2 border-dark py-10 font-medium'>
        <h1>{new Date().getFullYear()}&copy;All Rights Reserved</h1>
        <div >Build with <span className='mx-1 font-bold text-primary text-2xl'>&#9825;</span> by <Link href={"/ "} target='_black' className='inline-block underline underline-offset-2'>Anoj</Link></div>
        <Link  href={"/ "} target='_black' className='inline-block underline underline-offset-2'>Say Hello</Link>
    </footer>
  )
}

export default Footer