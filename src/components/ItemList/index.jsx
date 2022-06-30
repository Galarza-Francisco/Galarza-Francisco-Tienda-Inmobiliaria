import React from 'react'
import { Wrap} from '@chakra-ui/react'
import Item from '../Item'

const ItemList = ({products}) => {
  return (
    <Wrap justify={'center'} spacing='30px'  margin={5} padding={4}>
        {products.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}
    </Wrap>
  )
}

export default ItemList