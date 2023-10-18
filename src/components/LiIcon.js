import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({ reference }) => {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

    return (
        <figure className='absolute left-0 stroke-dark dark:stroke-light'>
            <svg width='50' height='75' viewBox='0 0 100 100' className=''>
                <circle cy='50' cx='75' r='25' className='stroke-primary stroke-1 dark:stroke-primaryDark fill-none'/>
                <motion.circle cy='50' cx='75' r='25' className=' stroke-[6px] fill-light dark:fill-dark' 
                style={{ pathLength: scrollYProgress }}
                />
                <circle cy='50' cx='75' r='10' className=' stroke-1 fill-primary dark:fill-primaryDark animate-pulse'/>
            </svg>
        </figure>
    )
}

export default LiIcon