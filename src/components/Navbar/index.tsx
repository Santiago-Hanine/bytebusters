
import Layout from '../Layout'
import { NavItems } from './NavItems'
import Image from 'next/image'

const Navbar = () => {
  return (
    <Layout className='bg-secondary sticky top-0 flex justify-between items-center h-20'>
      <div className='flex items-center gap-2 text-xl'>
        <Image src='/bytebusters-logo.png' width={50} height={50} alt='logo'/>
        <h3>ByteBusters</h3>
      </div>
        <div className='hidden lg:flex gap-10'>
            {NavItems().map((item, index) => (
                <div key={index}>
                    <a className='font-medium' href={item.href}>{item.name}</a>
                </div>
                )
                )}
        </div>
    </Layout>
  )
}

export default Navbar