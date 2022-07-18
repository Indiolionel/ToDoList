import React,{ useState,useContext} from 'react'
import Input from "./Input.jsx"  
import Button from './Button.js';
import FormContext from './FormContext.jsx';

export default function Formulario() {
  const { dispatch } = useContext(FormContext);
  const action = (name) => {
    

    setValue("")
    dispatch({ type:name, value })
    
    
  }
   
      const [value, setValue] = useState("")
   
  return (
    <div  className='container-button'>
        <Input value={value} setValue={setValue}/>
        <Button name={"delete"} action={action}/>
        <Button name={"add"} value={value} action={action}/>
                
    </div>
  )
}
