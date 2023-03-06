import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card.jsx';


export default function PokeApi() {

  const [data, setData] = useState([])
  const [contador, setContador] = useState(0)
  const [value, setValue] = useState("")


  const url = `https://pokeapi.co/api/v2/pokemon`


  useEffect(() => {

    axios.get(`${url}?offset=${contador}&limit=20`).then((response => {
      setData(response.data.results)

    })
    )
      .catch((error) => {
        console.log(`Tu error es ${error}`)
      });

  }, [contador])




  function siguiente() {
    setContador(contador + 20)
  }

  function atras() {
    setContador(contador - 20)
  }

  function filterPokemon() {
    axios.get(`${url}?limit=100000&offset=0`).then((response => {
      setData(response.data.results.filter((pokemon) => pokemon.name == value.toLocaleLowerCase()))

    }))
      .catch((error) => {
        console.log(`Tu error es ${error}`)
      });

    setValue("")

  }

  return (

    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className='flex flex-col justify-center items-center'>
          <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-gray-900">Pokemones</h2>
          <div className='flex mb-8'>
          <input className='w-full border p-2 rounded' type="text" placeholder='Ingrese Pokemon' value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={() => filterPokemon()} className="ml-8 bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Aceptar
          </button>
          </div>
         <div className='flex justify-center'>
          <button onClick={() => atras()} disabled={contador == 0} className={`bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 border border-blue-700 rounded disabled:opacity-25 disabled:cursor-not-allowed `}>
            Atras
          </button>
          <button onClick={() => siguiente()} className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Siguiente
          </button>
          </div>
        
        </div>
        {data.length > 0 ? <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((pokemon, index) => {
            return <Card name={pokemon.name} url={pokemon.url} key={index} />

          })}
        </div> : <div className='text-center mt-56 text-3xl font-bold text-indigo-900'>No Existe Pokemon!!</div>}
      </div>
    </div>

  )
}
