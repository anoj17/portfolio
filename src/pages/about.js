import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNum = ({ value }) => {

    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const spring = useSpring(motionValue, { duration: 3000 })
    const inView = useInView(ref)

    useEffect(() => {
        if (inView) {
            motionValue.set(value)
        }
    }, [inView, motionValue, value])

    useEffect(() => {
        spring.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [spring, value])

    return (
        <span ref={ref}></span>
    )
}


const about = () => {
    return <>

        <main>

            <Layout className='pt-10'>
                <AnimatedText text='Passion Fuels Purpose!' className='!text-7xl' />
                <div className='grid grid-cols-8 gap-16 w-full h-auto my-9'>
                    <div className='col-span-3 flex flex-col justify-start items-start'>
                        <h1 className='font-bold text-dark/75 text-2xl mb-3'>Biography</h1>
                        <p>
                            Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                            and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                            new and innovative ways to bring my clients' visions to life.
                        </p>

                        <p>
                            I believe that design is about more than just making things look pretty – it's about solving problems and
                            creating intuitive, enjoyable experiences for users.
                        </p>

                        <p>
                            Whether I'm working on a website, mobile app, or
                            other digital product, I bring my commitment to design excellence and user-centered thinking to
                            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>

                    <div className=' col-span-3 relative rounded-2xl h-max bg-light border-2 border-solid border-dark p-7'>
                        {/* <div className='absolute top-0 -right-3 w-[103%] h-[103%] bg-dark rounded-2xl -z-10'/> */}
                        <Image src={profilePic} alt='profile' className='w-full h-auto rounded-2xl bg-dark' />
                    </div>

                    <div className='flex flex-col items-end justify-between col-span-2 py-4'>
                        <div className='flex flex-col items-end justify-center space-y-3'>
                            <span className='text-5xl font-bold'>
                                <AnimatedNum value={'50'} />%
                            </span>
                            <h1 className='text-xl text-dark/75'>Satisfied Clients</h1>
                        </div>
                        <div className='flex flex-col items-end justify-center space-y-3'>
                            <span className='text-5xl font-bold'>
                                <AnimatedNum value={'45'} />%
                            </span>
                            <h1 className='text-xl text-dark/75'>Project Completed</h1>
                        </div>
                        <div className='flex flex-col items-end justify-center space-y-3'>
                            <span className='text-5xl font-bold'>
                                <AnimatedNum value={'5'} />%
                            </span>
                            <h1 className='text-xl text-dark/75'>Years of experience</h1>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>

    </>
}

export default about