import React, { useState, useContext, useEffect } from 'react'
import Input from "../components/Input.jsx"
import Button from '../components/Button.js';
import FormContext from '../Lista/reducerLista.jsx';
import List from '../components/List.jsx';
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';


export default function ToDoList() {
  const dispatch = useDispatch()
  const action = (name) => {
    
    setValue("")
    dispatch({ type: name, value })

  }

  const [value, setValue] = useState("")

  useEffect(() => {
    dispatch({ type: "load-from-localStorage" })
  }, [])

  function handleDelete() {
    Swal.fire({
      title: '¡Eliminar Todos!',
      text: '¿ Estas seguro que quieres eliminar todos ?',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: "Cancelar"

    })
      .then((res) => {
        res.isConfirmed && action("delete")
      })

  }

  return (
    <>
      <div className='container-button'>
        Lista de Tareas
      </div>

      <div className='flex justify-start items-center h-16 w-1/2 rounded-lg m-auto bg-slate-300 px-2 py-0.5'>
        <Input value={value} setValue={setValue} />
        <Button name={"add"} onClick={() => action("add")} isDisabled={!value}>Agregar</Button>
        <Button name={"delete"} onClick={() => handleDelete()}>Eliminar</Button>
      </div>

      <List />

    </>

  )
}
