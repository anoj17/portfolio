import React from 'react'
import { motion } from 'framer-motion'

const quote = {
    initial : {
        opacity : 1,
    },
    animate : {
        opacity : 1,
        transition : {
            delay : 0.5,
            staggerChildren: 0.08,
        }
    }
}

const textSlide = {
    initial : {
        opacity : 0,
        y:50
    },
    animate : {
        opacity : 1,
        y:0,
        transition : {
            duration: 1
        }
    }
}

const AnimatedText = ({text, className=''}) => {
  return (
    <div className='w-full mx-auto overflow-hidden  flex items-center justify-center py-2 text-center'>
        <motion.h1 className={`${className} text-8xl w-full font-bold capitalize text-dark inline-block dark:text-light`}
        variants={quote}
        initial="initial"
        animate="animate"
        >
            {
                text.split(" ").map((word,index)=>(
                    <motion.span key={word+'-'+index} className='inline-block'
                     variants={textSlide}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))
        }
        </motion.h1>
    </div>
  )
}

export default AnimatedText