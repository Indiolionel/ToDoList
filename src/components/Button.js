import React from 'react'

export default function Button({ name, children, isDisabled, onClick }) {

  const bgColor = name == "add" ? "bg-indigo-600 hover:bg-indigo-700  focus:ring-indigo-500" : "bg-red-400 hover:bg-red-500  focus:ring-red-500"

  return (

    <button disabled={isDisabled} className={`disabled:opacity-25 disabled:cursor-not-allowed ml-7 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  h-4/5 ${bgColor} `}
      onClick={onClick}>{children}</button>

  )
}

