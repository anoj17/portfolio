import React from 'react'

const Layout = ({children, className=''}) => {
  return (
    <div className={`${className} h-full w-full inline-block z-0 p-32 dark:bg-dark bg-light`}>
        {children}
    </div>
  )
}

export default Layout