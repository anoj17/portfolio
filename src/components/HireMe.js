import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className=' left-4 bottom-4 fixed flex justify-center items-center overflow-hidden '>
      
      <div className='w-48 h-auto flex justify-center items-center relative '>
        <CircularText className="animate-spin-slow fill-dark dark:fill-light"/>
      </div>
      <Link href={"mailto:anojbudathoki17@gmail.com"} className=' font-semibold absolute h-20 w-20 bg-dark rounded-full text-light 
      flex justify-center items-center dark:bg-light dark:text-dark
      '>
       <h1> Hire Me</h1>
      </Link>
    </div>
  )
}

export default HireMe