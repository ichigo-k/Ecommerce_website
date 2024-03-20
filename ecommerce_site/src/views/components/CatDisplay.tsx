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
                setLoading(false);
            });
    }, []);

    return (
        <div className="w-full">
            {loading ? (
                <div className='flex mt-2 gap-x-2 max-lg:overflow-x-scroll'>
                    
                    {Array(11).fill().map((_, i) => (
                        <div key={i} className="bg-gray-500  h-[2rem] rounded-full animate-pulse w-[7rem] "></div>
                    ))}
                </div>
            ) : (
                <ul className="flex max-lg:overflow-x-scroll lg:flex-wrap w-full gap-2 whitespace-nowrap p-3 text-xs no-scrollbar">
                    {categories && categories.map((category) => (
                        <li key={category} className="bg-gray-500 text-white font-semibold p-2 rounded-full"><a href={"/category/" + category}>{category}</a></li>
                    ))}
                </ul>
            )}
        </div>
    );
}
