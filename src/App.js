import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './Components/Cart'
import "react-toastify/dist/ReactToastify.css"
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'
import {ToastContainer} from 'react-toastify'
import Register from './Components/auth/register'
import Login from './Components/auth/login'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
        <Routes>
          <Route path='/Cart' element= {<Cart/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/register' element= {<Register/>}/>
          <Route path='/*' element= {<NotFound/>}/>
          <Route path='/'  element= {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
