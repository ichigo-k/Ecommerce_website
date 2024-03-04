import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { lazy, Suspense } from "react"
import Home from "./views/pages/Home"


export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
   </Suspense>
  )
}
