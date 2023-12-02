import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from "../../Reducer/Reducer";
import axios from "axios";

const initialState = {
  theme: "", 
  data: [],
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

const ContextGlobal = createContext();

const Context = ({ children }) => {
  

  const [state, dispatch] = useReducer(reducer, initialState)

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
    axios(url)    
    .then(response => dispatch({type: 'GET_DENTIST', payload: response.data}))
  })

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <ContextGlobal.Provider value={{
        state, dispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useGlobalStates = () => useContext(ContextGlobal)
