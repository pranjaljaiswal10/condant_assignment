import Body from "./Body"
import Sidebar from "./Sidebar"

const Layout = () => {
  return (
    <div className="flex">
    <Sidebar/>
    <Body/>
    </div>
  )
}

export default Layout