import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import useSwitchTheme from './hooks/useSwitchTheme'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'


const CustomLink = ({ href, title, className = '' }) => {

  const router = useRouter()
  return <>
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`${router.asPath == href ? 'w-full' : 'w-0'} h-[1px] inline-block bg-black dark:bg-light -bottom-0.5 left-0 absolute
    group-hover:w-full transition-[width] duration-300 ease-in-out`}>&nbsp;</span>
    </Link>
  </>
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {

  const router = useRouter()

  const toggleMenu = () => {
    toggle();
    router.push(href)
  }
  return <>
    <button href={href} className={`${className} relative group my-2`} onClick={toggleMenu}>
      {title}
      <span className={`${router.asPath == href ? 'w-full' : 'w-0'} h-[1px] inline-block bg-light dark:bg-dark -bottom-0.5 left-0 absolute
    group-hover:w-full transition-[width] duration-300 ease-in-out`}>&nbsp;</span>
    </button>
  </>
}

const NavBar = () => {

  const [changeIcon, setChangeIcon] = useState(false)
  const [mode, setMode] = useSwitchTheme()

  const changeHamIcon = () => {
    setChangeIcon(!changeIcon)
  }

  return (
    <header className='w-full px-48 flex justify-between relative py-8 font-medium dark:text-light'>

      <div onClick={changeHamIcon}
        className='hidden lg:flex justify-center items-center'
      >
        {
          !changeIcon ?
            <GiHamburgerMenu size={25} className='dark:text-light transition-all duration-500 ease-in-out cursor-pointer text-dark' />
            :
            <ImCross size={25} className='dark:text-light transition-all duration-500 ease-in-out cursor-pointer text-dark' />
        }
      </div>

      <div className='w-full flex justify-center items-center lg:hidden'>
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

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"} ml-4 flex justify-center items-center rounded-full p-1`}>

            {
              mode === "dark" ?
                <SunIcon className="fill-dark" />
                :
                <MoonIcon className="fill-dark" />
            }
          </button>

        </nav>
      </div>

      {
        changeIcon &&
        <motion.div
          initial={{scale:0, opacity:0, x: '-50%', y:'-50%'}}
          transition={{duration:0.5}}
          animate={{scale:1, opacity:1}}
          className={`dark:bg-light/90 bg-dark/75 rounded-2xl py-20 backdrop-blur-md hidden lg:flex
         dark:text-dark text-light z-50 w-[70vw] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           flex-col justify-center items-center`}>
          <nav className='flex flex-col justify-center items-center'>
            <CustomMobileLink href={"/"} title='Home' className='' toggle={changeHamIcon} />
            <CustomMobileLink href={"/about"} title='About' className='' toggle={changeHamIcon} />
            <CustomMobileLink href={"/project"} title='Project' className='' toggle={changeHamIcon} />
            <CustomMobileLink href={"/articles"} title='Articles' className='' toggle={changeHamIcon} />
          </nav>

          <nav className='flex justify-center items-center mt-3'>
            <motion.a
              href={"https:twiter.com"}
              target='_blank'
              className='w-6 h-7 mx-2 sm:mx-1'

              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a>

            <motion.a
              href={"https:twiter.com"}
              target='_blank'
              className='w-6 mx-2 h-7 sm:mx-1'

              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>

            <motion.a
              href={"https:twiter.com"}
              target='_blank'
              className='w-6 mx-2 h-7 sm:mx-1'

              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href={"https:twiter.com"}
              target='_blank'
              className='w-6 mx-2 h-7 sm:mx-1'

              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <PinterestIcon />
            </motion.a>

            <motion.a
              href={"https:twiter.com"}
              target='_blank'
              className='w-6 ml-2 h-7 sm:mx-1'

              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DribbbleIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`${mode === 'light' ? "bg-dark text-light" : "bg-light text-dark"} ml-4 flex justify-center sm:ml-2 items-center rounded-full p-1`}>

              {
                mode === "dark" ?
                  <SunIcon className="fill-dark" />
                  :
                  <MoonIcon className="fill-dark" />
              }
            </button>

          </nav>
        </motion.div>

      }

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar