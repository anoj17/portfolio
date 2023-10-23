import React from 'react'

const Layout = ({children, className=''}) => {
  return (
    <div className={`${className} h-full w-full inline-block z-0 p-32 xl:p-24 lg:p-16 sm:p-8 dark:bg-dark bg-light`}>
        {children}
    </div>
  )
}

export default Layout