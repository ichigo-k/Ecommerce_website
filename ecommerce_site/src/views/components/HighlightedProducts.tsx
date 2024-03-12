import React, { useEffect, useState } from 'react';
import getData from '../../Functions/getData';
import Highlight from './Highlight';

export default function HighlightedProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all(["1", "2", "6", "4"].map(id =>
            getData({ url: `products/${id}` })
        ))
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false); 
        });
    }, []);

    return (
        <div className="mt-5 max-md:mt-2">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="w-full flex-wrap justify-around flex gap-y-3  py-3 ">
                    <div className="bg-red-100 w-[45%] h-4rem p-2 rounded-lg flex justify-center items-center">
                        <Highlight {...products[0]} />
                    </div>

                    <div className="bg-blue-100 w-[45%] h-4rem p-2 rounded-lg flex justify-center items-center">
                         <Highlight {...products[1]} />
                    </div>

                    <div className="bg-violet-100 w-[45%] h-4rem p-2 rounded-lg flex justify-center items-center">
                         <Highlight {...products[2]} />
                    </div>

                    <div className="bg-green-100 w-[45%] h-4rem p-2 rounded-lg flex justify-center items-center">
                        <Highlight {...products[3]} />
                    </div>
                  

                </div>
            )}
        </div>
    );
}
