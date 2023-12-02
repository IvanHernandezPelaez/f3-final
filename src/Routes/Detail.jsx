import React, { useEffect, useState } from 'react'
import { useGlobalStates } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {state} = useGlobalStates()

  const [dentist, setDentist] = useState([])
  const { id } = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    axios(url)
      .then(response => setDentist(response.data))
  }, [])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h4>{dentist.name}</h4>
      <h4>{dentist.email}</h4>
      <h4>{dentist.phone}</h4>
      <h4>{dentist.website}</h4>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail