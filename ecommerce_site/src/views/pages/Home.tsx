import Hero from "../components/Hero";
import CatDisplay from "../components/CatDisplay";
import HighlightedProducts from "../components/HighlightedProducts";

export default function Home() {

  return (
    <div className='mt-5'>
        <div>
            <Hero />
          
            <CatDisplay/>

            <HighlightedProducts />
           
        </div>
    </div>
  )
}
