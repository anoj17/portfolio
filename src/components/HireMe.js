import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className=' left-4 bottom-4 fixed flex md:absolute justify-center md:right-8 md:left-auto md:bottom-auto md:top-0 items-center overflow-hidden '>
      
      <div className='w-48 md:w-24 h-auto flex justify-center items-center relative '>
        <CircularText className="animate-spin-slow fill-dark dark:fill-light"/>
      </div>
      <Link href={"mailto:anojbudathoki17@gmail.com"} className=' font-semibold absolute h-20 w-20 bg-dark rounded-full text-light 
      flex justify-center items-center dark:bg-light dark:text-dark md:h-12 md:w-12 md:text-[12px]
      '>
       <h1> Hire Me</h1>
      </Link>
    </div>
  )
}

export default HireMe