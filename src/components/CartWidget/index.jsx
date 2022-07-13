import { Badge, Box, Link} from '@chakra-ui/react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Context/ShopContext'

const CartWidget = () => {
    const {cart} = useContext(Shop);

  return (
    <Box>
        <Link mb={7}>
            {cart.length && <Badge ml={6} bg='transparent' color={'GrayText'} >{cart.length}</Badge>}
            <AiOutlineShoppingCart size={25}/>
        </Link>
    </Box>

  )
}

export default CartWidget