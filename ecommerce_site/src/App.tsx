import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { lazy, Suspense } from "react"
import Home from "./views/pages/Home"
import Category from "./views/pages/Category"
const Product = lazy(() => import("./views/pages/Product"))


export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
   </Suspense>
  )
}
