import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()
  return <>
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`${router.asPath == href ? 'w-full' : 'w-0'} h-[1px] inline-block bg-black -bottom-0.5 left-0 absolute
    group-hover:w-full transition-[width] duration-300 ease-in-out`}>&nbsp;</span>
    </Link>
  </>
}

const NavBar = () => {
  return (
    <header className='w-full min-h-screen px-48 flex justify-between py-8 font-medium '>
      <nav>
        <CustomLink href={"/"} title='Home' className='mr-2' />
        <CustomLink href={"/about"} title='About' className='mx-2' />
        <CustomLink href={"/project"} title='Project' className='mx-2' />
        <CustomLink href={"/articles"} title='Articles' className='ml-2' />
      </nav>

      <nav className='flex space-x-6'>
        <motion.a
          href={"https:twiter.com"}
          target='_blank'
          className='w-6 mr-2 h-7'

          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>

        <motion.a
          href={"https:twiter.com"}
          target='_blank'
          className='w-6 mx-2 h-7'

          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href={"https:twiter.com"}
          target='_blank'
          className='w-6 mx-2 h-7'

          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a
          href={"https:twiter.com"}
          target='_blank'
          className='w-6 mx-2 h-7'

          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>

        <motion.a
          href={"https:twiter.com"}
          target='_blank'
          className='w-6 ml-2 h-7'

          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar