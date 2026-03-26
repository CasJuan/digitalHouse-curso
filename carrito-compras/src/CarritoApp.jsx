import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import { NavbarComponent } from './components/NavbarComponent'
import { ProductPage } from './pages/ProductPage';
import { Cart } from './pages/Cart';

export const CarritoApp = () => {
  return (
    <>
    <NavbarComponent/>
    <div className='container'>
        <Routes>
            <Route path='/' element={<ProductPage/>}></Route>
            <Route path='/carrito' element={<Cart/>}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
        </Routes>

    </div>
    </>
  )
}
