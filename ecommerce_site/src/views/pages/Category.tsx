import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import getData from '../../Functions/getData'
import ProductDisplay from "../components/ProductDisplay"

export default function Category() {

    let {id} = useParams()

    const [product, setProduct] = useState(null);
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
            <p>Loading ...</p>
            : 
            <div className="flex flex-col justify-between p-2">
               <ProductDisplay products={product}  />
            </div>
        }
    </div>
  )
}
