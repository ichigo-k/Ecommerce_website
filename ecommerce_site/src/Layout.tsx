import { Outlet } from "react-router-dom"
import Navbar from "./views/components/Navbar"
import Footer from "./views/components/Footer"

export default function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
