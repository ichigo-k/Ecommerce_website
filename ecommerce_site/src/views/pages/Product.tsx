import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import getData from '../../Functions/getData'

export default function Product() {

    const {id} = useParams()

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData({ url: "products/" + id  })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);


  return (
    <div>
        {
            loading  ?  <p>Loading ...</p>

            : (
                <div className="p-2 ">
                   ``
                </div>
            )
        }
    </div>
  )
}
