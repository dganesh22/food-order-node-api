import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import { ToastContainer } from 'react-toastify'
import Home from './components/Common/Home'
import Pnf from './components/Common/Pnf'
import Login from './components/Common/Login'
import Register from './components/Common/Register'
import Cart from './components/User/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
          <Header/>
            <ToastContainer autoClose={4000} position={"top-right"} />
            <Routes>
                <Route path={`/`} element={<Home/>} />
                <Route path={`/login`} element={<Login/>} />
                <Route path={`/register`} element={<Register/>} />
                <Route path={`/cart`} element={<Cart/>} />
                <Route path={`/*`} element={<Pnf/>} />
            </Routes>
          <Footer/>
    </BrowserRouter>
  )
}

export default App
