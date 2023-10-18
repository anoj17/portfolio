import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ProjectPic from '../../public/images/projects/Crypto-Screener-cover-image.jpg'
import { motion } from 'framer-motion'

const FeatureProject = ({ type, title, link, github, img, para }) => {
    return <>

        <motion.article className='w-full relative h-auto flex justify-between items-center space-x-5 p-16 border-dark bg-light border-2 border-solid rounded-3xl
        dark:bg-dark dark:text-light dark:border-light
        '
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
        >
            <Link href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt='image' className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between'>
                <span className='text-xl text-primary dark:text-primaryDark font-bold'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h1 className='font-bold text-3xl my-2'>{title}</h1>
                </Link>
                <p className='font-semibold text-dark/75 dark:text-light/75'>{para}</p>
                <div className='flex justify-center items-center space-x-3 mt-4'>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target='_blank' className='px-3 py-2 bg-dark rounded-lg text-light'>
                        <h1 className='font-semibold'>Visit Project</h1>
                    </Link>
                </div>
            </div>
        </motion.article>

    </>
}

const Project = ({ link, type, img, title, github }) => {
    return <>

        <motion.article className='w-full h-auto flex flex-col justify-between items-center space-x-5 p-16 border-dark bg-light border-2 border-solid rounded-3xl
        dark:bg-dark dark:text-light dark:border-light
        '
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
        >
            <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt='image' className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-3'>
                <span className='text-xl text-primary dark:text-primaryDark font-bold'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h1 className='font-bold text-2xl my-2'>{title}</h1>
                </Link>
                <div className='flex justify-between items-center space-x-3 mt-2 w-full'>
                    <Link href={link} target='_blank' className='px-3 py-2 bg-dark rounded-lg text-light'>
                        <h1 className='font-semibold underline'>Visit</h1>
                    </Link>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                </div>
            </div>
        </motion.article>

    </>
}

const project = () => {
    return <>

        <main>

            <Layout className='pt-14'>
                <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16' />

                <div className='grid grid-cols-12 gap-24'>
                    <div className='col-span-12'>
                        <FeatureProject
                            title='Crypto Screener Application'
                            para='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                            link='/'
                            github='/'
                            type='Featured Project'
                            img={ProjectPic}
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project
                            title='Crypto Screener Application'
                            link='/'
                            github='/'
                            type='Featured Project'
                            img={ProjectPic}
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project
                            title='Crypto Screener Application'
                            link='/'
                            github='/'
                            type='Featured Project'
                            img={ProjectPic}
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeatureProject
                            title='Crypto Screener Application'
                            para='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.'
                            link='/'
                            github='/'
                            type='Featured Project'
                            img={ProjectPic}
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project
                            title='Crypto Screener Application'
                            link='/'
                            github='/'
                            type='Featured Project'
                            img={ProjectPic}
                        />
                    </div>

                    <div className='col-span-6'>
                        <Project
                            title='Crypto Screener Application'
                            link='/'
                            github='/'
                            type='Featured Project'
                            img={ProjectPic}
                        />
                    </div>
                </div>
            </Layout>
        </main>

    </>
}

export default project