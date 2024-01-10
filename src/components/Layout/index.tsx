import { clsx } from "clsx"

const Layout = ({children, className, id} : {
    children: React.ReactNode
    className?: string
    id?:string
}) => {
  return (
    <div id={id} className={clsx("px-6 lg:px-24 xl:px-48 mx-auto w-full", className)}>
        {children}
    </div>
  )
}

export default Layout