import React from 'react'
import Layout from '../Layout'

const Hero = () => {
  return (
    <Layout className='bg-hero-pattern h-[calc(100vh-5rem)] bg-cover bg-center bg-blend-lighten bg-[rgba(173,177,211,0.7)]'>
        <div className='h-full flex flex-col justify-end pb-16 lg:pb-44 xl:pb-52 gap-6 max-w-4xl'>
                <h2 className='text-4xl font-medium lg:text-7xl'>Fix Your Computer Fast</h2>
                <p className='text-lg font-light tracking-normal md:text-xl md:tracking-wide'>Reliable computer repair service in California. Get your computer back up and running in no time.</p>
                <a className='bg-primary font-light text-center md:text-left text-white w-full md:w-fit p-4 rounded-lg text-xl' href="">Call Now</a>
        </div>
    </Layout>
  )
}

export default Hero