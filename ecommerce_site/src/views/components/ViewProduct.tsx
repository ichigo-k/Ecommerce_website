import React from 'react'

export default function ViewProduct({id, style}):any {
  return (
    <a href={"/product/"+ id}>
    <button className={`w-full py-2 px-2  bg-black rounded-md ${style} `}>
            View Product
        </button>
    </a>
  )
}
