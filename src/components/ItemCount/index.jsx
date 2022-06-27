import { Button, Text, Flex, Container, HStack } from '@chakra-ui/react'
import {React, useState } from 'react'
import './styles.css'

const ItemCount = ({handleAdd, initialStock}) => {

    const [count, setCount ] = useState(1);

    const onAdd = () =>{
        if (count < initialStock){
            setCount(count + 1);
        }
    }

    const onDecrement = () =>{
        if (count > 1){
            setCount(count - 1);
        }
    }

  return (
    <Container textAlign={'center'} boxShadow='base' p='6' rounded='md'>
        <HStack justify={'space-between'}>
            <Button onClick={onDecrement}>-</Button>
            <Button onClick={onAdd}>+</Button>
        </HStack>
        <Text>{count}</Text>
        <Flex>
        <Button onClick={handleAdd}>Agregar al carrito</Button>
        </Flex>
    </Container>
  )
}

export default ItemCount