import React, {useContext} from 'react'
import FormContext from "./FormContext"


export default function List() {
  const {state} = useContext(
    FormContext
  );
  const values = [...state]
  console.log(values)
  return (
    <div>
        {values.map((item,index)=>{
        const changeColor = item>6? 'green' : 'red';

        return <p  className={`${changeColor}`} key={index}> {item} </p> 
        }
        
        )}
    </div>
    
  )
}
