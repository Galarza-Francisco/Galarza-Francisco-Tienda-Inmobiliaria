import { Flex } from '@chakra-ui/react'
import React from 'react'
import ItemCount from '../../ItemCount';

const ItemListemContainer = ({greeting}) => {

  const handleAdd = () =>{
    console.log('se agrego al carrito');
  }

  

  return (
    <Flex justify={'center'}>
      {greeting}
      <Flex>
        <ItemCount handleAdd={handleAdd} initialStock={10}/>
      </Flex>
    </Flex>
  )
}

export default ItemListemContainer