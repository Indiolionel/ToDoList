import { Link } from 'react-router-dom';

export default function Home() {


  return (
    <div className="bg-gray-50 my-80">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Trabajo Practico N°2</span>
          <span className="block text-indigo-600">React ...</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link to="lista" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Ir a Tareas </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link to="poke-api" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> Ir a Poke-api </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
