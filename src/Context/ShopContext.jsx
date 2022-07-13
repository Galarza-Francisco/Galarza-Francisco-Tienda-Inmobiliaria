import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const Shop = createContext();


const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState('valor por defecto')

    const [cart, setCart] = useState([]);

    const addItem = (producto, cantidad) =>{
      const productoRepetido = isInCart(producto);

      if (productoRepetido) {
        productoRepetido.quantity += cantidad
        setCart([...cart])
      }else {

        setCart([...cart, {...producto, quantity:cantidad}])
      }
    }

    //remover elementos
    
    const removeItem = (id) =>{
      const productosFiltrados = cart.filter(producto => producto.id !== id)
      setCart(productosFiltrados);
    }


    //vaciar carrito



    const isInCart = (producto) =>{
      return cart.find(elemento => elemento.id === producto.id)
    }

    return (
    <Shop.Provider value={{estadoA, setEstadoA, addItem, cart,removeItem}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider