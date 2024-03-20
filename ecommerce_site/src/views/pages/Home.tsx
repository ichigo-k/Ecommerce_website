import Hero from "../components/Hero";
import CatDisplay from "../components/CatDisplay";
import HighlightedProducts from "../components/HighlightedProducts";
import AllProducts from "../components/AllProducts";
import Cta from "../components/Cta"

export default function Home() {

  return (
    <div className='mt-5'>
        <div>
            <Hero />
          
            <CatDisplay/>

            <HighlightedProducts />

            <AllProducts />

            <Cta />
           
        </div>
    </div>
  )
}
