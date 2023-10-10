import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='mt-2 '>
            <MotionLink href={"/"}
                className='h-16 w-16 bg-black rounded-full font-bold flex justify-center items-center text-light text-2xl'

                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: {duration:1, repeat:Infinity}
                }}
                key={"logo"}
            >
                CB
            </MotionLink>
        </div>
    )
}

export default Logo