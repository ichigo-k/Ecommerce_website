import React from 'react'
import ViewProduct from './ViewProduct'

export default function Highlight({thumbnail,category,brand,title, discountPercentage,price,id,stock}) {
  return (
    <div className="flex justify-evenly max-md:flex-col md:mt-1">
         <img src={thumbnail} alt="" className="w-1/3 h-[10rem] max-md:h-[5rem] max-md:w-full object-cover" />

<div className="p-2 w-2/3 max-md:w-full flex flex-col justify-between ">

    <div className="flex items-center gap-x-3 max-md:gap-x-2 ">

    <p className="bg-purple-400 p-1 rounded-full text-xs truncate  text-white text-center max-md:text-[10px]">{category}</p>
        <p className="bg-orange-400 p-1 truncate rounded-full text-xs  text-white text-center max-md:text-[10px]"> {brand}</p>
    </div>
   <div>
   <h1 className="font-semibold text-xl max-md:text-lg capitalize w-full truncate text-gray-700">{title}</h1>

   </div>
    
    <div className="flex w-full justify-between items-center">
        <p className="text-xl font-semibold text-gray-500 truncate max-md:text-md ">GH₵ {discountPercentage ? (price - (price * discountPercentage / 100)).toFixed(2) : price}</p>
        <p className="max-md:hidden ">{stock} In Stock</p>
    </div>


    <p className={discountPercentage ? "block" : "hidden"}>
        <span className="text-gray-500 line-through"> {price.toFixed(2)} </span>
        <span className=" bg-lime-600 text-white p-1 text-xs rounded-md ml-1">{discountPercentage.toFixed(1)}% off</span></p>

        <ViewProduct id={id} style="mt-2  w-full bg-black text-white "/>

</div>
    </div>
  )
}
