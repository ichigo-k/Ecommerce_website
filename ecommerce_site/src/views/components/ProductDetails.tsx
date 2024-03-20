import React from 'react';

interface ProductDetailsProps {
  product: {
    title: string;
    category: string;
    brand: string;
    thumbnail: string;
    price: number;
    discountPercentage: number | null;
    stock: number;
    description: string;
    images: string[];
    id: number;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { title, category, brand, thumbnail, price, discountPercentage, stock, description, images } = product;

  return (
    <article className="product-details">
      <header className="product-header">
        <h1 className="product-title text-3xl font-semibold text-gray-800">{title}</h1>
        <div className="product-categories flex items-center gap-x-3 p-2">
          <p className="category-badge bg-purple-400 p-1 rounded-full text-md text-white text-center">{category}</p>
          <p className="category-badge bg-orange-400 p-1 rounded-full text-md text-white text-center">{brand}</p>
        </div>
      </header>

      

      <main className="product-main flex flex-wrap md:flex-row max-xl:flex-col">
        <section className="product-image md:w-1/2 max-xl:w-full">
          <img src={thumbnail} alt={title} className="w-full md:h-[20rem] h-[10rem] object-cover" />
        </section>

        <section className="product-info md:w-1/2 max-xl:w-full p-4">
          <div className="product-price flex items-center">
            <p className="current-price text-2xl font-semibold text-gray-800">
              GH₵{' '}
              {discountPercentage
                ? (price - (price * discountPercentage / 100)).toFixed(2)
                : price.toFixed(2)}
            </p>
            {discountPercentage && (
              <span className="original-price ml-2">
                <span className="line-through text-gray-500">GH₵ {price.toFixed(2)}</span>
                <span className="discount-badge bg-lime-600 text-white p-1 text-xs rounded-md">
                  {discountPercentage.toFixed(1)}% off
                </span>
              </span>
            )}
          </div>
          <p className="stock text-gray-800">{stock} In Stock</p>
          <p className="description text-gray-800">{description}</p>
          <a href={`/`}>
            <button className="add-to-cart-btn bg-black text-white w-full py-2 rounded-md mt-2">Add to Cart</button>
          </a>
        </section>
      </main>

      <div className="flex overflow-x-auto p-2 gap-x-2 no-scrollbar">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} className="w-1/3 h-40 object-cover" />
        ))}
      </div>
    </article>
  );
};

export default ProductDetails;
