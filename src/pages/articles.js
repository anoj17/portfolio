import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import project1 from '../../public/images/articles/article1.jpg'
import project2 from '../../public/images/articles/loading.jpg'
import article1 from '../../public/images/articles/create.png'
import article2 from '../../public/images/articles/form.png'
import article3 from '../../public/images/articles/todo.png'
import article4 from '../../public/images/articles/redux.png'
import article5 from '../../public/images/articles/what.jpg'
import { motion, useMotionValue } from 'framer-motion'


const MotionImg = motion(Image)

const MovingImg = ({ img, link, title }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = useRef(null)

  const handleMouse = (event) => {
    ref.current.style.display = "inline-block"
    x.set(event.pageX)
    y.set(-10)
  }

  const handleMouseLeave = (event) => {
    ref.current.style.display = "none"
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={link} target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='font-bold hover:underline'>{title}</h2>

      <MotionImg ref={ref} src={img} alt={title}
        className='w-96 h-auto rounded-lg hidden z-10 absolute'
        style={{ x:x, y:y}}
      />
    </Link>
  )
}

const Article = ({ link, title, date, img }) => {

  return (

    <li className='w-full first:mt-0 flex relative justify-between items-center border-r-4 border-b-4 border border-dark border-solid p-5
    m-5 rounded-2xl text-dark bg-light dark:bg-dark dark:border-light dark:text-light
    '>
      <MovingImg img={img} link={link} title={title}
      />
      <span className='text-primary dark:text-primaryDark font-semibold'>{date}</span>
    </li>
  )
}

const Featured = ({ link, img, time, summary, title }) => {

  return <>

    <li className='col-span-1 w-full p-4 border-dark bg-light border border-solid rounded-3xl
    dark:bg-dark dark:border-light dark:text-light
    '>
      <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <MotionImg src={img} alt='image' className='w-full h-auto rounded-lg'
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        />
      </Link>
      <Link href={link}>
        <h2 className='font-bold my-2 text-3xl hover:underline underline-offset-2 text-dark dark:text-light'>{title}</h2>
      </Link>
      <p className='text-dark/75 font-semibold my-2 dark:text-light'>{summary}</p>
      <span className='text-primary dark:text-primaryDark font-semibold text-md'>{time}</span>
    </li>

  </>
}

const article = () => {
  return <>

    <main>
      <Layout className='pt-14'>
        <AnimatedText text='Words Can Change The World! ' className='!text-7xl mb-10' />

        <ul className='grid grid-cols-2 gap-16'>
          <Featured
            title=" Build A Custom Pagination Component In Reactjs From Scratch"
            link="/"
            img={project1}
            time="9 min read"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
          Follow this step-by-step guide to integrate Pagination component in your ReactJS project."

          />

          <Featured
            title=" Build A Custom Pagination Component In Reactjs From Scratch"
            link="/"
            img={project2}
            time="7 min read"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
          Follow this step-by-step guide to integrate Pagination component in your ReactJS project."

          />
        </ul>

        <ul className='mt-20'>
          <h1 className='w-full text-center font-bold text-2xl text-dark my-7'>All Articles</h1>
          <Article
            title=" Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            date="22 dec"
            link="/"
            img={article1}
          />

          <Article
            title=" Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
            date="22 dec"
            link="/"
            img={article2}
          />

          <Article
            title=" Creating An Efficient Modal Component In React Using Hooks And Portals"
            date="22 dec"
            link="/"
            img={article3}
          />

          <Article
            title=" Build A Fabulous Todo List App With React, Redux And Framer-Motion"
            date="22 dec"
            link="/"
            img={article5}
          />

          <Article
            title=" Creating An Efficient Modal Component In React Using Hooks And Portals"
            date="22 dec"
            link="/"
            img={article4}
          />

          <Article
            title="Redux Simplified: A Beginner's Guide For Web Developers"
            date="22 dec"
            link="/"
            img={article1}
          />

          <Article
            title="What Is Higher Order Component (Hoc) In React?"
            date="22 dec"
            link="/"
            img={article3}
          />
        </ul>
      </Layout>
    </main>

  </>
}

export default article