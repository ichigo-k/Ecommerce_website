import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import getData from '../../Functions/getData'
import ProductDisplay from "../components/ProductDisplay"

export default function Category() {

    let {id} = useParams()

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        getData({ url: "products/category/" + id  })
            .then((data) => {
                setProduct(data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);




  return (
    <div className="mt-5">
        {
            loading 
            ?
            <div>
                <div className="flex flex-wrap justify-around gap-y-3 p-2 ">
                    {
                        Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="bg-gray-500 w-full animate-pulse p-2 rounded-lg h-[10rem] lg:h-[15rem] mb-3"></div>
                          ))
                    }
                </div>
            </div>
            : 
            <div className="flex flex-col justify-between p-2">
               <ProductDisplay products={product}  />
            </div>
        }
    </div>
  )
}
