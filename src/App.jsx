import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/details/:id' element={<Detail/>}/>
        <Route path='/favs' element={<Favs/>}/>
      </Routes>      
      <Footer/>
    </>
  )
}

export default App
