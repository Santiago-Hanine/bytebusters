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
    <Layout className={clsx("py-10 flex justify-center items-center md:items-normal flex-col md:flex-row gap-10", className)}>
        {children}
    </Layout>
  )
}

export default CardContainer