import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {

const ref = useRef(null)

    return (
        <li ref={ref} className='w-[60%] first:mt-0 last:mb-0 my-9 flex flex-col items-center justify-between mx-auto
        md:w-[75%]
        '>
            
            <LiIcon reference={ref}/>
            <motion.div
            initial={{
                y:50
            }}
            whileInView={{y:0}}
            transition={{ duration: 1.5, type:"spring"}}
            >
                <h2 className='font-bold text-2xl lg:text-xl sm:text-[17px]'>{position}&nbsp; <a href={companyLink} target='_blank' className=' text-primary dark:text-primaryDark'>@{company}</a></h2>
                <span className='text-dark/75 font-semibold dark:text-light'>{time} | {address}</span>
                <p className='w-full font-medium lg:text-[15px] md:text-[13px] sm:text-[12px]'>{work}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div
            className='w-full mt-64 lg:mt-48 md:mt-32 sm:mt-20'
        >
            <h1 className='text-7xl font-bold text-center lg-text-5xl md:text-4xl sm:text-4xl'>Experience</h1>

            <div ref={ref} className='w-[75%] mx-auto relative my-16 lg:w-[90%] md:w-full'>

                <motion.div style={{scaleY: scrollYProgress }}  className='w-1 dark:bg-light rounded-full origin-top h-full bg-dark absolute top-0 
                left-9 '
                 />
                <ul className='w-full flex flex-col items-start justify-between ml-5'>
                    <Details
                        position={"Software Engineer"}
                        company={"Google"}
                        time={"2022-Present"}
                        companyLink={"www.google.com"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
                    />

                    <Details
                        position={"Intern"}
                        company={"Facebook"}
                        time={"2022-Present"}
                        companyLink={"www.google.com"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
                    />

                    <Details
                        position={"Software Developer"}
                        company={"Amazon"}
                        time={"2022-Present"}
                        companyLink={"www.google.com"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
                    />

                    <Details
                        position={"Teaching Skill"}
                        company={"Microsoft"}
                        time={"2022-Present"}
                        companyLink={"www.google.com"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
                    />

                    <Details
                        position={"Backend Developer"}
                        company={"MIT"}
                        time={"2022-Present"}
                        companyLink={"www.google.com"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience