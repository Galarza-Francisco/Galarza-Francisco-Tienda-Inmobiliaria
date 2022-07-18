import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const Shop = createContext();


const ShopProvider = ({children}) => {


    const [cart, setCart] = useState([]);

    // agregar item al carrito, dependiendo de la cantidad.

    const addItem = (producto, cantidad) =>{

      const productoRepetido = cart.find(elemento => elemento.id === producto.id)

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

    const limpiarCarrito = () =>{
      setCart([]);
    }


    return (
    <Shop.Provider value={{addItem,limpiarCarrito, cart,removeItem}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider