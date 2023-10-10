import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className=' left-4 bottom-4 fixed flex justify-center items-center overflow-hidden'>
      
      <div className='w-48 h-auto animate-spin-slow relative'>
        <CircularText />
      </div>
      <Link href={"mailto:anojbudathoki17@gmail.com"} className=' font-semibold absolute h-20 w-20 bg-dark rounded-full text-light 
      flex justify-center items-center
      '>
       <h1> Hire Me</h1>
      </Link>
    </div>
  )
}

export default HireMe