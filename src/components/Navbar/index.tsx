
import Layout from '../Layout'
import { NavItems } from './NavItems'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='px-6 lg:px-24 xl:px-48 mx-auto w-full bg-secondary sticky top-0 flex justify-between items-center h-20 z-10'>
      <div className='flex items-center gap-2 text-xl'>
        <Image src='/bytebusters-logo.png' width={50} height={50} alt='logo'/>
        <h3>ByteBusters</h3>
      </div>
        <nav className='hidden lg:flex gap-10'>
            {NavItems().map((item, index) => (
                    <a key={index} className='font-medium' href={item.href}>{item.name}</a>
                )
                )}
        </nav>
    </header>
  )
}

export default Navbar