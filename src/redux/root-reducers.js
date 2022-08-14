import { combineReducers } from "redux";
import { listaReducer } from "../Reducers/reducerLista";


const rootReducer = combineReducers({

   lista: listaReducer

})

export default rootReducer