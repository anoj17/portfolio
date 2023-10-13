import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profile from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import Skill from '@/components/Skill'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='w-full min-h-screen flex items-center text-dark '>
        <Layout className='pt-0'>
          <div className='flex justify-between items-center w-full'>
            <div className='w-1/2'>
              <Image src={profile} alt='profile' className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-center self-center'>
              <AnimatedText text={"Turning Vision Into Reality With Code And Design."} className='!text-5xl !text-left' />
              <p className='my-2 text-base font-semibold'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>

              <div className='flex w-full items-center self-start mt-4 space-x-8'>
                <Link href={"/dummy.pdf"} target='_blank'
                  className='bg-dark text-light p-2.5 px-6 rounded-lg flex
              hover:bg-light hover:text-dark font-bold text-xl border-2 border-transparent hover:border-dark
              '
                  download={true}
                >
                  Resume
                  <LinkArrow className={"ml-1"} />

                </Link>

                <Link href={"mailto:anojbudathoki17@gmail.com"} target='_blank'
                  className='bg-dark text-light p-2.5 px-6 rounded-lg flex
              hover:bg-light hover:text-dark font-bold text-xl border-2 border-transparent hover:border-dark
              '
                >
                  Contact
                </Link>

              </div>
            </div>

          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-4 w-28'>
          <Image src={lightBulb} alt='bulb' className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
