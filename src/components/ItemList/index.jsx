import React from 'react'
import {Grid} from '@chakra-ui/react'
import Item from '../Item'

const ItemList = ({products}) => {
  return (
    <Grid templateColumns={'repeat(4, 1fr)'} gap={8} margin='10'>
        {products.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}
    </Grid>
  )
}

export default ItemList