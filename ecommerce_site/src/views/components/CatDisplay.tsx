import React, { useEffect, useState } from 'react';
import getData from '../../Functions/getData';

export default function CatDisplay() {
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData({ url: "products/categories" })
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(true);
            });
    }, []);

    return (
       <div className=" w-full ">
           {
            loading ?
             <div>Loading...</div> 
            :
                <ul className="flex max-lg:overflow-x-scroll lg:flex-wrap justify-between w-full gap-2 whitespace-nowrap p-3 text-xs no-scrollbar ">
                    {categories.map((category) => (
                        <li key={category} className="bg-gray-500 text-white font-semibold p-2 rounded-full"><a href={"/category/"+ category}>{category}</a></li>
                    ))}
                </ul>
           }
       </div>
    );
}
