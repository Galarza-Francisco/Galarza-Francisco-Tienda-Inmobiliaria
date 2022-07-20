import { Badge, Box, Button, Flex, Image, Text} from '@chakra-ui/react';
import React, { useContext } from 'react'
import { Shop } from '../../../Context/ShopContext'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {FiTrash} from 'react-icons/fi'
import {AiOutlineClear} from 'react-icons/ai'
import {TbArrowBigLeftLines} from 'react-icons/tb'

const Cart = () => {

  const navigate = useNavigate();

  const {cart, removeItem, limpiarCarrito} = useContext(Shop);

  // calcular precios de los articulos iguales
  const getPrecio = (quantity, price) =>{
    return quantity * price;
  }

  // calcular total de la compra

  const getTotal = () =>{
    const valorInicial = 0;
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity , valorInicial
    );

    return total;
  }

  
  const clear = (e) =>{
    e.preventDefault();
    limpiarCarrito();
  }
  
  return (
    <Box>
      {cart.length !== 0 ? (
       <Box p={2}>
       {cart.map(producto => {
               return (
               <Flex justify={'space-between'} border='1px' borderColor={'blackAlpha.300'} p={2} key={producto.id} m={2}>
                   <Box p={3}>
                     <Image src={producto.image} w='100px' h='100px'/>
                   </Box>
                   <Box m={2} maxW='70%' >
                     <Text mb={2}>{producto.title}</Text>
                     <Text fontSize={'xs'}>{producto.descripcion}</Text>
                   </Box>
                   <Flex align={'center'} alignItems='center'ml={'2rem'}>
                     <Box>
                       <Badge variant='subtle' fontSize={'sm'} >$ {getPrecio(producto.quantity, producto.precio)}</Badge>
                     </Box>
                     <Box ml={4}>
                       <Button fontSize='1.5rem' colorScheme={'red'} variant='ghost' onClick={() => removeItem (producto.id)}><FiTrash/></Button>
                     </Box>
                   </Flex>
               </Flex>
               )
             })}
                <Text textAlign={'right'}  m={2}>total: {getTotal()}</Text>
                 <Flex justifyContent={'space-around'} direction='row'>
                   <Box>
                     <Button leftIcon={<TbArrowBigLeftLines/>} variant='outline' colorScheme={'yellow'} onClick={()=> navigate('/')}>Seguir Comprando</Button>
                   </Box>
                   <Box>
                     <Button colorScheme={'yellow'} variant='outline' leftIcon={<AiOutlineClear/>} onClick={(e) => clear(e)}>vaciar carrito</Button>
                   </Box>
                 </Flex>
           </Box>
      ) : (
        <Flex direction={'column'} align='center'>
          <Box mb={6}>
            <Badge p={2} variant={'subtle'} fontWeight={'semibold'} fontSize='xl' colorScheme={'blackAlpha'} color='blackAlpha.500'>No hay productos en el carrito, regresa y hace tu compra!</Badge>
          </Box>
          <Box>
            <Button  onClick={()=> navigate('/')} variant='outline' colorScheme='yellow'>
              Volver al Catálogo
            </Button>
          </Box>
        </Flex>
      )}
    </Box>
  );
}

export default Cart