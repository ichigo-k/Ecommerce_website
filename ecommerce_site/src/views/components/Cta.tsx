import React from 'react'

export default function Cta() {
  return (
    <div className="w-full h-[10rem] relative mt-5">
        <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-[10rem] w-full object-cover"/>

        <div className="w-full h-[10rem] absolute bg-black/50 top-0"> </div>

        <div className="w-full h-[10rem] absolute top-0 flex flex-col justify-center items-center text-white ">
            <p className="text-center text-xl">
             Join our newsletter to receive exclusive offers and discounts.Get in touch with us today!
             </p>
             <button className="bg-black py-2 px-5 mt-2 rounded-md">
                Subscribe
             </button>
            
            
        </div>

    </div>
  )
}
