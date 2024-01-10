import Contact from "../Contact"

const Footer = () => {
  return (
    <footer className="px-6 lg:px-24 xl:px-48 mx-auto w-full bg-secondary py-20 flex flex-col md:flex-row items-center justify-between space-y-16">
        <a href="/" className="text-5xl">Bytebusters</a>
        <Contact />
        <h4 className="text-lg">Developed by Santiago Hanine</h4>
    </footer>
  )
}

export default Footer