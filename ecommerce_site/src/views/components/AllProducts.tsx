import React,{useEffect, useState} from 'react'
import getData from '../../Functions/getData'
import PopularProducts from "./PopularProducts"

export default function AllProducts() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getData({ url: "products/?limit=6&skip=8" })
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

  return (
    <div className="mt-5">
          <h1 className="text-center font-semibold text-3xl mb-3 w-full ">Popular Products</h1>
    {loading ? (
        
        <div>
            <div className="flex flex-wrap justify-around gap-y-3 p-2 ">
                {
                    Array(6).fill().map((_, i) => (
                        <div key={i} className="bg-gray-500 w-[30%] max-xl:w-full animate-pulse  p-2 rounded-lg h-[10rem] lg:h-[10rem]">
                            
                        </div>
                    ))
                }
            </div>
        </div>
    ) : (
        <>
          
            <div className="w-full flex flex-wrap p-2 justify-between">
                <PopularProducts products={products}/>
            </div>
        </>
       
    )}

    </div>
  )
}
