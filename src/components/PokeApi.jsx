import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react'
import Card from './Card.jsx';
import FormContext from './FormContext';

export default function PokeApi() {

  const { dispatch } = useContext(FormContext);
  const [data, setData] = useState([])
  const [disabled, setDisabled] = useState("nada")
  const [contador, setContador] = useState(0)
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${contador}&limit=20 `

  useEffect(() => {
    dispatch({ type: "load-from-localStorage" })
  }, [])


  useEffect(() => {



    axios.get(url).then((response => {
      setData(response.data.results)

    })
    )
      .catch((error) => {
        console.log(`Tu error es ${error}`)
      });

  }, [contador])

  // data && console.log(data)



  function siguiente() {
    setContador(contador + 20)
  }



  function atras() {
    setContador(contador - 20)
  }


  return (

    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-gray-900">Pokemones</h2>
        <button onClick={() => atras()} disabled={contador == 0} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded disabled:opacity-25 disabled:cursor-not-allowed `}>
          Atras
        </button>
        <button onClick={() => siguiente()} className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Siguiente
        </button>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((pokemon, index) => {
            return <Card name={pokemon.name} url={pokemon.url} key={index} />
          })}
        </div>
      </div>
    </div>

  )
}
