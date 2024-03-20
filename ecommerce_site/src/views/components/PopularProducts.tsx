import React from 'react'
import ViewProduct from './ViewProduct'

export default function PopularProducts({products}) {
  return (
    <>
    {products.map((product) => (
        <div key={product.id} className="max-xl:w-full w-[30%] flex h-[15rem] max-md:h-[15rem]  mb-2 mt-2 rounded-md shadow-lg relative bg-white border-b p-2 ">
            
            <img src={product.thumbnail} alt="" className="w-1/3 h-[10rem] max-md:h-[10rem] object-cover" />

            <div className="p-2 md:py-1 w-2/3 flex flex-col justify-between ">

                <div className="flex items-center gap-x-3 ">
                <p className="bg-purple-400 p-1 rounded-full text-xs truncate  text-white text-center">{product.category}</p>
                    <p className="bg-orange-400 p-1 truncate rounded-full text-xs  text-white text-center"> {product.brand}</p>
                </div>
               <div>
               <h1 className="font-semibold text-lg capitalize w-full truncate text-gray-700">{product.title}</h1>

               </div>
                
                <div className="flex w-full justify-between items-center">
                    <p className="text-xl font-semibold text-gray-500 truncate max-md:text-lg ">GH₵ {product.discountPercentage ? (product.price - (product.price * product.discountPercentage / 100)).toFixed(2) : product.price}</p>
                    <p className="">{product.stock} In Stock</p>
                </div>


                <p className={product.discountPercentage ? "block" : "hidden"}>
                    <span className="text-gray-500 line-through"> {product.price.toFixed(2)} </span>
                    <span className=" bg-lime-600 text-white p-1 text-xs rounded-md ml-1">{product.discountPercentage.toFixed(1)}% off</span></p>

                    <ViewProduct id={product.id} style="mt-2  w-full bg-black text-white "/>

            </div>


        </div>
    ))}
</>
  )
}
