import React from 'react'

export default function Button({name, action }) {
 
  const bgColor = name=="add" ? "bg-indigo-600 hover:bg-indigo-700  focus:ring-indigo-500" : "bg-red-400 hover:bg-red-500  focus:ring-red-500"
  
  return (
    <div className='h-5/6 w-1/12 ml-4'>

    <button className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  h-4/5 w-20 ${bgColor} `}
     onClick={ ()=>action(name) }>{ name }</button>
    
    </div>
  )
}

