import { Outlet } from "react-router-dom"
import Navbar from "./views/components/Navbar"

export default function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
