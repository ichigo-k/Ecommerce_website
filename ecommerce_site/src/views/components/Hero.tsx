import { useLayoutEffect, useState } from "react";
import getData from "../../Functions/getData";

export default function Hero() {
    const [product, setProduct] = useState<any>({});

    useLayoutEffect( async() => {
        getData({ url: "products/1" })
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="relative h-[20rem]">
            <img src={product.images[0]} alt="" className="h-[20rem] w-full object-cover "/>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 p-4">
                <div className="w-1/2">
                    <h1 className="text-3xl text-white font-bold">{product.title}</h1>
                    <p className="text-white">{product.description}</p>
                    <button className="bg-white text-black px-3 py-1 rounded-md mt-3">Buy Now</button>
                </div>
                <div className="w-1/2">
                    <img src={product.thumbnail} alt="" />
                </div>
            </div>
        </div>
    );
}
