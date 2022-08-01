import { createContext } from "react";

export default createContext(null);

export function reducer(state, action) {
  switch (action.type) {

    case 'add':
      const  list = [...state, action.value]
      localStorage.setItem("list",JSON.stringify(list))
      return list

    case 'delete':
      localStorage.removeItem("list")
      return []

    case 'delete-row':
      const  deleteRow = state.filter((element)=>element !== action.value)
      localStorage.setItem("list",JSON.stringify(deleteRow))
      return deleteRow

    case 'load-from-localStorage':
      const value = localStorage.getItem("list")
       
      return value ? JSON.parse(value) : state

    default:
      return state
  }
}


export const initialValue = [];
