import React, {useContext, useEffect} from 'react'
import FormContext from './FormContext';


export default function Home() {

  const { dispatch} = useContext(FormContext);

  useEffect(() => {   
    dispatch ({type: "load-from-localStorage" })   
  }, [])

  return (
    <div>Home</div>
  )
}
