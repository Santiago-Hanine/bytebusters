import clsx from 'clsx'
import React from 'react'
import Layout from '../Layout'

const CardContainer = ({children, className}:
    {
        children: React.ReactNode,
        className?: string
    }
    ) => {
  return (
    <Layout id='services' className={clsx("bg-blue py-20 flex flex-col gap-10", className)}>
      <h3 className="text-7xl text-center">What we do?</h3>
        <div className='flex justify-center items-center md:items-normal flex-col md:flex-row gap-10'>
        {children}
        </div>
    </Layout>
  )
}

export default CardContainer