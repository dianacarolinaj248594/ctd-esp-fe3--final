import React from 'react'
import { useContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';


const Home = () => {

  const{state}=useContextGlobal()

  return (
    <main className="principal" >
    <h1 className='tituloHome'>Home Dentist</h1>
    <div className='card-grid'>
      {/* Aqui deberias renderizar las cards */}
      {state.dentistas.map((dentista)=><Card odontologo={dentista} key={dentista.id}/>)}
    </div>
  </main>
  )
}

export default Home