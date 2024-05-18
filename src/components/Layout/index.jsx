import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";


const Layout = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-white via-transparent to-slate-400 ">
      <Navbar />
      <main className="w-full h-full  px-1 pt-28 lg:px-32 md:px-5">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;