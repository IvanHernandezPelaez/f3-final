import React from "react";
import {Link} from "react-router-dom"
import { useGlobalStates } from "./utils/global.context";


const Card = ({ dentist }) => {

   const {state, dispatch} = useGlobalStates()
   const findFavorito = state.favs.find( favorito => favorito.id == dentist.id)
  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    

    if (findFavorito) {
      alert('El Dentista ya es favorito')
    } else {
      dispatch({ type: 'ADD_FAV', payload: dentist })

    }

  }

  return (
    <div className="card">
      <Link to={'/details/'+dentist.id}>
        <img className="imgDoc" src="/images/doctor.jpg" alt="" />      
        <h3>{dentist.name}</h3>
        <h3>{dentist.username}</h3>
      </Link>     
      

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{findFavorito ? '🔴' : '⭐'}</button>
    </div>
  );
};

export default Card;
