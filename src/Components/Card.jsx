import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import imageDentist from '../images/doctor.jpg';
import { useContextGlobal } from "./utils/global.context";
import Swal from "sweetalert2";


const Card = ({ odontologo }) => {

  const{state,dispatch}=useContextGlobal()

  const[isfavorito,setIsFavorito]=useState(false)
  

  // useEffect Logica para colocar los odontologos en localstore

  useEffect(()=>{
    localStorage.setItem("misFavoritos", JSON.stringify(state.favorites))
  },[state.favorites])



   // useEffect Logica para saber si el odontologo ya se encuentra en favoritos

  useEffect(()=>{
    const estaEnFavoritos= state.favorites.some(favo=>favo.id === odontologo.id)
    setIsFavorito(estaEnFavoritos)
  },[state.favorites, odontologo.id])


  const addFav = ()=>{
    Swal.fire("Se ha agregado a favoritos");
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type:'add_favorites', payload:odontologo})
    setIsFavorito(true)
  }

  const removeFav=()=>{

    Swal.fire({
      title: "Want to delete?",
      text: "The dentist will be remove from favorites",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       const nuevosFavoritos = state.favorites.filter(favo => favo.id !== odontologo.id);
       localStorage.setItem('misFavoritos', JSON.stringify(nuevosFavoritos));
       dispatch({ type: 'delete_favorites', payload: nuevosFavoritos })
  
        Swal.fire({
          title: "Deleted!",
          text: "He dentist has been deleted.",
          icon: "success"
        });
      }
    });

  }

  return (
    <div className='card'>
        {/* En cada card deberan mostrar en name - username y el id */}    
        <Link to={'/Detail/' + odontologo.id}>
           <img className="imageDentist" src={imageDentist}alt="" />
           <h2 className="dataDentist">{odontologo.name}</h2>
           <h3 className="dataDentist">{odontologo.username}</h3>
           <h3 className="dataDentist">Id: <span>{odontologo.id}</span></h3>
         </Link>
         {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
         {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
         
         { isfavorito ?
            <button onClick={removeFav} className="ButtonDeleteFav">🚮</button> :
            <button onClick={addFav} className="favButton">⭐</button>  
         } 
          
     </div>
  );
};

export default Card;
