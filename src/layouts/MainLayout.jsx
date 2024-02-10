import { Outlet } from "react-router-dom"
import { Footer, /* Navbar */ } from "../shared"

const MainLayout = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Outlet />
        <Footer/>
    </div>
  )
}

export default MainLayout