import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Shop } from '../../../Context/ShopContext'

const Cart = () => {

  const {cart, removeItem} = useContext(Shop);
  
  return (
      <Flex p={2}>
        {cart.map(producto => {
          return <Flex border='1px'p={2} key={producto.id}>
            <Image src={producto.image} w='60px' h='60px'/>
            <Box >
              <Text>{producto.title}</Text>
              <Text fontSize={'xs'} >{producto.description}</Text>
            </Box>
            <Box>
              <Text>{'$' + producto.price}</Text>
              <Button onClick={() => removeItem (producto.id)}> Eliminar </Button>
            </Box>
          </Flex>
        })}
      </Flex>
  )
}

export default Cart