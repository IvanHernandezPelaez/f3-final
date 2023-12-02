import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [persona, setPersona] = useState({
    nombre: '',
    email: ''
  })

  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  
  const [error, setError] = useState(false)
  const [correcto, setCorrecto] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const nombreValidado = persona.nombre.trim();

    if ((nombreValidado.length >= 3) && (regex.test(persona.email))){
      setError(false)
      setCorrecto(true)      
    }else{
      setError(true)
      setCorrecto(false)
    }

  return (
    <div>
      <h1>Registro</h1>    

        {!correcto &&      
            <form onSubmit={handleSubmit}>        
            <label>Nombre</label>
            <br />
            <input type="text" placeholder='Ingrese su nombre' value={persona.nombre} onChange={(e) => setPersona({...persona, nombre: e.target.value})}/>
            <br />
            <label>Email</label>
            <br />
            <input type="text" placeholder='Ingrese su color favorito' value={persona.email} onChange={(e) => setPersona({...persona, email: e.target.value})}/>
            <br />
            <button type='submit'>Enviar</button>
            </form>
        }

            {correcto && <h3>Gracias {persona.nombre} Gracias por registrarte, te contactaremo</h3>}
            {error && <h3>Por favor chequea que la información sea correcta</h3>} 
    </div>
  );
};

}
export default Form;





