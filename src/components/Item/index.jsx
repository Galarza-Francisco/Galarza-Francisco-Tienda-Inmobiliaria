import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Badge, Box,Image, WrapItem } from '@chakra-ui/react'

const Item = ({product}) => {

  const navigate = useNavigate();

  const handleDetail = () =>{
    console.log('navega hacia el detalle');
    navigate(`/detail/${product.id}`)
  }
  
  return (
    <WrapItem>
      <Box shadow={'base'} maxW='sm' flex={'1'}  borderWidth='1px' borderRadius='lg' p='4' overflow='hidden' onClick={handleDetail}>
        <Image boxSize={'fit-content'} src={product.image} alt={`imagen ${product.tipo}`}/>
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>Nuevo</Badge>
            <Box color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'>
                {product.operacion}
            </Box>
          </Box>
          <Box 
          mt='5'
          fontWeight='semibold'
          as='h2'
          lineHeight='tight'
          noOfLines={4}>
            {product.direccion}
          </Box>
          <Box textAlign={'center'} p='2' textTransform='uppercase' color='greay.800' fontSize='x-large'>
            Usd $ {product.precio}
          </Box>
          <Box as='span' display='flex' mt='4' ml='2' fontSize='sm' color='gray.600'>
            {product.descripcion}
          </Box>

        </Box>
      </Box>
    </WrapItem>
  )
}

export default Item

