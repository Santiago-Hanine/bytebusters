import { clsx } from "clsx"

const Layout = ({children, className} : {
    children: React.ReactNode
    className?: string
}) => {
  return (
    <div className={clsx("px-6 lg:pl-24 xl:px-48 mx-auto w-full", className)}>
        {children}
    </div>
  )
}

export default Layout