import React, { useState, useContext, useEffect } from 'react'
import Input from "./Input.jsx"
import Button from './Button.js';
import FormContext from './FormContext.jsx';
import List from './List.jsx';

export default function Formulario() {
  const { dispatch} = useContext(FormContext);
  const action = (name) => {
    setValue("")
    dispatch({ type: name, value })
  }

  const [value, setValue] = useState("")

  useEffect(() => {   
    dispatch ({type: "load-from-localStorage" })   
  }, [])
  


  return (
    <>
      <div className='container-button'>
        Lista de Tareas
      </div>

      <div className='flex justify-start items-center h-16 w-1/2 rounded-lg m-auto bg-slate-300 px-2 py-0.5'>
        <Input value={value} setValue={setValue} />
        <Button name={"add"} value={value} action={action} />
        <Button name={"delete"} action={action} />
      </div>

      <List />

    </>

  )
}
