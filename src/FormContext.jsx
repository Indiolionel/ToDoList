import { createContext } from "react";

export default createContext(null);

export function reducer(state, action) {
  switch (action.type) {

    case 'add':

      return [...state, action.value]

    case 'delete':

      return []

    default:
      return state
  }
}


export const initialValue = [];
