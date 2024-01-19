import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useContextGlobal} from '../Components/utils/global.context'
import axios from 'axios';
import imagenDent from '../images/doctor.jpg'

const Detail = () => {

  const parametro=useParams()

  const {state,dispatch}=useContextGlobal()

  const urlUser=`https://jsonplaceholder.typicode.com/users/${parametro.id}`

  useEffect(()=>{
    axios(urlUser)
    .then(res=> dispatch({type:'get_odontologo', payload:res.data}))
  })


  return (
    <div className='dentist'>
    <h1 className='tituloDetail'>Detail Dentist Number {state.odontologo.id} </h1>
    {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
    {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    <img className='imageDetail' src={imagenDent} alt="" />
    <div className='contenedorDentist'>
      <h2 className='dentisth2'>Name: <span>{state.odontologo.name}</span></h2>
      <h2 className='dentisth2'>Email: <span>{state.odontologo.email}</span></h2>
      <h2 className='dentisth2'>Phone: <span>{state.odontologo.phone}</span></h2>
      <h2 className='dentisth2'>WebSite: <span>{state.odontologo.website}</span></h2>
      
    </div>
  
  </div>

  )
}

export default Detail