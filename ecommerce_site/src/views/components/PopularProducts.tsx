import React from 'react';
import ViewProduct from './ViewProduct';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  brand: string;
  price: number;
  discountPercentage?: number; // Optional property
  stock: number;
  // Add other properties as needed
}

const PopularProducts: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="max-xl:w-full w-[30%] mb-2 mt-2 rounded-md shadow-lg relative bg-white border-b p-2 flex flex-col md:flex-row"
        >
          <img
            src={product.thumbnail}
            alt=""
            className="w-full h-40 md:w-1/3 md:h-auto object-cover"
          />

          <div className="p-2 md:py-1 w-full md:w-2/3 flex flex-col justify-between">
            <div className="flex items-center gap-x-3 mb-2">
              <p className="bg-purple-400 p-1 rounded-full text-xs truncate text-white text-center">
                {product.category}
              </p>
              <p className="bg-orange-400 p-1 rounded-full text-xs truncate text-white text-center">
                {product.brand}
              </p>
            </div>
            <h1 className="font-semibold text-lg capitalize w-full truncate text-gray-700">
              {product.title}
            </h1>
            <div className="flex justify-between items-center mb-2">
              <p className="text-xl font-semibold text-gray-500 truncate">
                GH₵{' '}
                {product.discountPercentage
                  ? (product.price - (product.price * product.discountPercentage / 100)).toFixed(
                      2
                    )
                  : product.price.toFixed(2)}
              </p>
              <p>{`${product.stock} In Stock`}</p>
            </div>
            {product.discountPercentage && (
              <p className="block">
                <span className="text-gray-500 line-through">{product.price.toFixed(2)}</span>
                <span className="bg-lime-600 text-white p-1 text-xs rounded-md ml-1">
                  {`${product.discountPercentage.toFixed(1)}% off`}
                </span>
              </p>
            )}
            <ViewProduct id={product.id} style="mt-2 w-full bg-black text-white" />
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularProducts;
