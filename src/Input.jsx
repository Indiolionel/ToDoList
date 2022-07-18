import React from 'react'



export default function Input({value, setValue}) {


  return (
    <div>
        <input type="number" placeholder='Ingrese un Numero' value={value} onChange={(event)=>setValue(event.target.value)} />

    </div>
  )
}

