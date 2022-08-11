import { combineReducers } from "redux";
import { listaReducer } from "../Lista/reducerLista";


const rootReducer = combineReducers({
    
   lista: listaReducer

})

export default rootReducer