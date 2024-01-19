import { createContext,useContext,useEffect } from "react";
import { useReducer } from "react";
import reducer from "../../Reducer/Reducer";
import axios from "axios";

export const initialState = {
  theme: "",
  dentistas:[],
  odontologo:{},
  favorites:JSON.parse(localStorage.getItem('misFavoritos')) ||[]

}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const[state , dispatch]= useReducer(reducer,initialState)

  const url='https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
    axios(url)
    .then(respuesta=> dispatch({type: 'get_dentists' , payload:respuesta.data},console.log(respuesta.data)))
  },[])

  return (
    <ContextGlobal.Provider value={{
      state,dispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider

export const useContextGlobal=()=> useContext(ContextGlobal)

