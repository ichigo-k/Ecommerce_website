import React from 'react';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  brand: string;
  price: number;
  discountPercentage?: number;
  stock: number;
}

const ProductDisplay: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card w-full flex h-[15rem] max-md:h-[10rem] mb-2 mt-2 rounded-md shadow-lg relative bg-white border-b"
        >
          <img
            src={product.thumbnail}
            alt=""
            className="product-image w-1/3 h-[15rem] max-md:h-[10rem] object-cover"
          />
          <div className="p-2 w-2/3 flex flex-col justify-between">
            <div className="flex items-center gap-x-3">
              <p className="product-category bg-purple-400 p-1 rounded-full text-xs truncate text-white text-center">
                {product.category}
              </p>
              <p className="product-brand bg-orange-400 p-1 rounded-full text-xs truncate text-white text-center">
                {product.brand}
              </p>
            </div>
            <h1 className="product-title font-semibold text-xl max-md:text-lg capitalize w-full truncate text-gray-700">
              {product.title}
            </h1>
            <div className="flex w-full justify-between items-center">
              <p className="text-xl font-semibold text-gray-500 truncate max-md:text-lg">
                GH₵{' '}
                {product.discountPercentage
                  ? (product.price - (product.price * product.discountPercentage / 100)).toFixed(2)
                  : product.price.toFixed(2)}
              </p>
              <p className="">{product.stock} In Stock</p>
            </div>
            {product.discountPercentage && (
              <p className="block">
                <span className="text-gray-500 line-through">
                  {product.price.toFixed(2)}
                </span>
                <span className="bg-lime-600 text-white p-1 text-xs rounded-md ml-1">
                  {`${product.discountPercentage.toFixed(1)}% off`}
                </span>
              </p>
            )}
            <a href={`/product/${product.id}`}>
              <button className="view-product-btn bg-black text-white w-full py-2 max-md:py-1 rounded-md mt-2">
                View product
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDisplay;
