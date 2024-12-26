import Body from "./Body"
import Sidebar from "./Sidebar"

const Layout = () => {
  return (
    <div className="flex border gap-3 ">
    <Sidebar/>
    <Body/>
    </div>
  )
}

export default Layout