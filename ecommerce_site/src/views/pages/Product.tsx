import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../Functions/getData';
import ProductDetails from '../components/ProductDetails';

export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState({
        title: "",
        category: "",
        brand: "",
        thumbnail: "",
        price: 0,
        discountPercentage: 0,
        stock: 0,
        description: "",
        images: [],
        id: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData({ url: `products/${id}` })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]); 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading product. Please try again later.</p>;
  }

  return <ProductDetails product={product} />;
}
