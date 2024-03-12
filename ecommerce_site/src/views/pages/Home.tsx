import Hero from "../components/Hero";
import CatDisplay from "../components/CatDisplay";

export default function Home() {

  return (
    <div className='mt-5'>
        <div>
            <Hero />
            <div className="">
                <CatDisplay/>
            </div>
           
        </div>
    </div>
  )
}
