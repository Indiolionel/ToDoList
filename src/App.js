
import React,{ useReducer } from 'react';
import './App.css';
import Formulario from './components/Formulario.jsx';
import FormContext,{initialValue,reducer} from './components/FormContext';
import NavBar from './components/NavBar';
import { Route, Routes,  } from 'react-router-dom';
import Home from './components/Home';
import PokeApi from './components/PokeApi';

function App() {


  const [state, dispatch] = useReducer(reducer,initialValue)



  return (
    <>
    
    <FormContext.Provider value={{state, dispatch}}>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />     
      <Route path="lista" element={<Formulario />} />
      <Route path="poke-api" element={<PokeApi />} />
     </Routes>
              
    </FormContext.Provider>
    </>
  )
  
}

export default App;
