import React, { useState, useEffect } from "react";
import getData from "../../Functions/getData";

export default function Hero() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData({ url: "products/1" })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="relative h-[20rem]">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 p-4">
                    <div className="w-1/2">
                        <h1 className="text-3xl text-white font-bold">Loading...</h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative md:h-[20rem] h-[13rem]">
            <img src={product?.images[0]} alt="" className="md:h-[20rem] h-[13rem] w-full object-cover" />

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 p-4 space-x-1">

                <div className="w-1/2">
                    <h1 className="text-3xl text-white font-bold max-md:text-xl">{product.title}</h1>
                    <p className="text-white max-md:text-sm">{product.description}</p>
                    <button className="bg-white text-black px-3 py-1 rounded-md mt-3">Buy Now</button>
                </div>
                <div className="w-1/2">
                    <img src={product.thumbnail} alt="" />
                </div>
            </div>
        </div>
    );
}
