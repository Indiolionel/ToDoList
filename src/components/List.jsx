import React, {useContext} from 'react'
import FormContext from './FormContext.jsx';
import Tarea from './Tarea.jsx';
// import Item from './Item';


export default function List() {
  const {state} = useContext(
    FormContext
  );
  const values = [...state]
  console.log(values)
  return (
    <div className='container-list flex flex-col'>
        {values.map((item,index)=>{
        const changeColor = index%2==0? 'odd' : 'even';

        return <div  className={`${changeColor}`} key={index}> <Tarea item={item}/> </div> 
        }
        
        )}
    </div>
    
  )
}
