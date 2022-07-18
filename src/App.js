
import React,{ useReducer } from 'react';
import './App.css';
import Formulario from './Formulario';
import List from './List';
import FormContext,{initialValue,reducer} from './FormContext';

function App() {


  const [state, dispatch] = useReducer(reducer,initialValue)


  return (
    <>
    <FormContext.Provider value={{state, dispatch}}>
       <Formulario />
       <List />
    </FormContext.Provider>
    </>
  )
  
}

export default App;
