import {
  TrashIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';



const DELETE_ROW = "delete-row"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Tarea({ item }) {
/// item {id: 0, value: 'dfsdf'}
  const state = useSelector(state => state.lista)
  const dispatch = useDispatch()
  function eliminar({ state, item }) {
    Swal.fire({
      title: '¡Eliminar!',
      text: '¿ Estas seguro que quieres eliminarlo ?',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: "Cancelar"

    })
      .then((res) => {
        res.isConfirmed && dispatch({ type: DELETE_ROW, value: item })
      })


  }


  return (
    <div className="lg:flex lg:items-center lg:justify-between m-3.5">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{item.value}</h2>

      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">

        <span className="sm:ml-3">
          <button
            type="button" onClick={() => eliminar({ state, item:item.id })}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Eliminar
          </button>
        </span>

      </div>
    </div>
  )
}