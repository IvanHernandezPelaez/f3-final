import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <div>
        <img src='./public/images/iOdonto.jpg' width={150} />
      </div>
      <div className='navLinks'>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/contact'><h4>Contacto</h4></Link>
        <Link to='/favs'><h4>Favoritos</h4></Link>
      </div>
      <div>
        <button>Change theme</button>
      </div>
      
    </nav>
  )
}

export default Navbar