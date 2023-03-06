import React, { useState, useContext, useEffect } from 'react'
import Input from "../components/Input.jsx"
import Button from '../components/Button.js';
import List from '../components/List.jsx';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';

export default function ToDoList() {
  
const state = useSelector(state => state.lista)
console.log(state)
  const dispatch = useDispatch()
  const action = (name) => {

    setValue("")
    dispatch({ type: name, value })

  }

  const [value, setValue] = useState("")



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

      <div className='container-todoList flex justify-start items-center h-16 w-1/2 rounded-lg m-auto bg-slate-300 px-2 py-0.5'>
        <Input value={value} setValue={setValue} />
        <div className='container-button m-0'>
        <Button name={"add"} onClick={() => action("add")} isDisabled={!value}>Agregar</Button>
       <Button name={"delete"} onClick={() => handleDelete() } isDisabled={state.length==0}>Eliminar</Button> 
      </div>
      </div>

      <List />

    </>

  )
}
