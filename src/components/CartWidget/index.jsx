import { Badge, Box, Button} from '@chakra-ui/react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const {cart} = useContext(Shop);
    const navigate = useNavigate();

  return (
    <Box>
        <Button onClick={()=> navigate('/cart')} variant='ghost' colorScheme='yellow'  mb={7}>
            {cart.length && <Badge bg='transparent' color={'GrayText'} >{cart.length}</Badge>}
            <AiOutlineShoppingCart size={25}/>
        </Button>
    </Box>

  )
}

export default CartWidget