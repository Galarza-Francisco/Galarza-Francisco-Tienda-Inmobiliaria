import React from 'react';
import './styles.css';
import {Box, Image, Badge, Flex} from '@chakra-ui/react';

const ItemDetail = ({ product }) => {
    return (
      <Flex justify={'center'}>
        <Box shadow={'base'} maxW='sm' flex={'1'} borderWidth='1px' borderRadius='lg' p='4' overflow='hidden'>
          <Image src={product.image} alt={`imagen ${product.title}`}/>
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>Nuevo</Badge>
              <Box color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'>
                  {product.category}
              </Box>
            </Box>
            <Box 
            mt='5'
            fontWeight='semibold'
            as='h2'
            lineHeight='tight'
            noOfLines={4}>
              {product.title}
            </Box>
            <Box textAlign={'center'} p='2' textTransform='uppercase' color='greay.800' fontSize='x-large'>
              Usd $ {product.price}
            </Box>
            <Box as='span' display='flex' mt='4' ml='2' fontSize='sm' color='gray.600'>
              {product.description}
            </Box>
          </Box>
        </Box>
      </Flex>
    )
  }
export default ItemDetail