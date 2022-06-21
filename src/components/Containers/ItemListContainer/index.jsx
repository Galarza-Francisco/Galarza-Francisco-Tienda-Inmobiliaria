import { Flex } from '@chakra-ui/react'
import React from 'react'

function ItemListContainer({greeting}) {
  return (

      <Flex>
        <h2>{greeting}</h2>
      </Flex>

  )
}

export default ItemListContainer