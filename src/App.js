
import React, { useReducer } from 'react';
import './App.css';
import FormContext, { initialValue, lista } from './Lista/reducerLista';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Route, Routes, } from 'react-router-dom';
import Home from './Pages/Home';
import PokeApi from './Pages/PokeApi';
import ToDoList from './Pages/ToDoList';

function App() {





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
