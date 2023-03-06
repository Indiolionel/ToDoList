
import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PokeApi from './Pages/PokeApi';
import ToDoList from './Pages/ToDoList';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "load-from-localStorage" })
  }, [])

  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lista" element={<ToDoList />} />
        <Route path="poke-api" element={<PokeApi />} />
      </Routes>
      

    </>
  )

}

export default App;
