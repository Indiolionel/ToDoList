import React from 'react'



export default function Input({ value, setValue }) {


  return (
    <div className='h-4/5 w-8/12 '>
      <input className='h-full w-full rounded-lg px-2' type="text" placeholder=' Ingrese una tarea' value={value} onChange={(event) => setValue(event.target.value)} />

    </div>
  )
}

