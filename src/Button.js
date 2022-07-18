import React from 'react'




export default function Button({name, action }) {
 
  return (
    <div>
    <button className='boton' onClick={ ()=>action(name) }>{ name }</button>
    
    </div>
  )
}
