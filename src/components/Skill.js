import React from 'react'
import { motion } from 'framer-motion'

const Skill = () => {

    const AnimatedDiv = ({ value, x, y }) => {

        return <>
            <motion.div className='py-3 px-6 font-bold dark:bg-light dark:text-dark bg-dark text-light flex justify-center items-center rounded-3xl shadow-dark cursor-pointer absolute
            md:bg-transparent md:dark:bg-transparent md:text-sm md:text-bold md:py-2 md:px-4 md:dark:text-light md:text-dark
            lg:text-[12px] md:text-[10px] sm:text-[12px]
            '
            whileHover={{scale:1.05}}
            initial={
                {x:0,y:0}
            }
            whileInView={{
            x:x,y:y, transition: {duration: 1.5}
            }}
            viewport={{once: true}}
            >
                
                {value}
            </motion.div>
        </>
    }

    return <>

        <h1 className='font-bold text-7xl flex justify-center items-center w-full mt-64 md:mt-28 md:text-5xl sm:text-5xl'>Skill</h1>
        <div className='w-full h-screen flex justify-center items-center relative bg-circularLight rounded-full
        dark:bg-circularDark md:h-[80vh] xs:h-[50vh] Lg:bg-circularLightLg Lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        '>

            {/* repeating radial gradient site bata garako yo golo golo bg-circularImage*/}

            <div className='p-5 font-bold bg-dark dark:bg-light dark:text-dark text-light flex justify-center items-center rounded-3xl shadow-dark cursor-pointer
            lg:p-3 sm:p-2 lg:text-[14px] md:text-[12px] sm:text-[12px] 
            '>
                Web
            </div>

            <AnimatedDiv value='HTML' x='9vw' y='-7vw'/>
            <AnimatedDiv value='CSS' x='-4vw' y='-9vw'/>
            <AnimatedDiv value='Java Script' x='-32vw' y='-10vw'/>
            <AnimatedDiv value='Tailwind' x='-4vw' y='-18vw'/>
            <AnimatedDiv value='Typescript' x='23vw' y='-15vw'/>
            <AnimatedDiv value='React JS' x='-18vw' y='19vw'/>
            <AnimatedDiv value='Figma' x='-20vw' y='3vw'/>
            <AnimatedDiv value='Web Desigh' x='17vw' y='8vw'/>
            <AnimatedDiv value='Next Js' x='-2vw' y='17vw'/>

        </div>

    </>
}

export default Skill