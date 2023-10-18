import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {

    const ref = useRef(null)

    return (
        <li ref={ref} className='w-[60%] first:mt-0 last:mb-0 my-9 flex flex-col items-center justify-between mx-auto'>

            <LiIcon reference={ref} />
            <motion.div
                initial={{
                    y: 50
                }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.5, type: "spring" }}
            >
                <h2 className='font-bold text-2xl'>{type}</h2>
                <span className='text-dark/75 font-semibold'>{time} | {place}</span>
                <p className='w-full font-medium'>{info}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div
            className='w-full mt-64'
        >
            <h1 className='text-7xl font-bold text-center'>Education</h1>

            <div ref={ref} className='w-[75%] mx-auto relative my-16'>

                <motion.div style={{ scaleY: scrollYProgress }} className='w-1 rounded-full origin-top h-full bg-dark absolute top-0 left-9
                dark:bg-light
                ' />
                <ul className='w-full flex flex-col items-start justify-between ml-5'>
                    <Details
                        type={"Bachelor Of Science In Computer Science"}
                        time={"2016-2020 "}
                        place={"Massachusetts Institute Of Technology (MIT)"}
                        info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."}
                    />

                    <Details
                        type={"Bachelor Of Science In Computer Science"}
                        time={"2016-2020 "}
                        place={"Massachusetts Institute Of Technology (MIT)"}
                        info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."}
                    />

                    <Details
                        type={"Bachelor Of Science In Computer Science"}
                        time={"2016-2020 "}
                        place={"Massachusetts Institute Of Technology (MIT)"}
                        info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."}
                    />

                </ul>
            </div>
        </div>
    )
}

export default Education