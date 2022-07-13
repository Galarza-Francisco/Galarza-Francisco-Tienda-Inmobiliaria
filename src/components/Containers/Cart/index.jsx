import { Box, Stack, StackItem } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Shop } from '../../../Context/ShopContext'

const Cart = () => {

  const {cart} = useContext(Shop);
  
  return (
    <Box>
      <Stack>
        {cart.map(producto =>{
          return <StackItem key={producto.id}>{producto.title}</StackItem>
        })}
      </Stack>
    </Box>
  )
}

export default Cart