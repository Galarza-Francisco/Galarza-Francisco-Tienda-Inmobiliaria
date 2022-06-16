
import { Flex, Heading, HStack, Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'

function NavBar() {
  return (
    <Flex px='200px' py={'30px'} width='full' justifyContent='space-between' alignItems={'flex-end'}>
        <Flex alignItems={'flex-end'}>
            <Heading mr={'60px'} fontSize={20} letterSpacing='1.5px' color={'yellow.400'}>
               <Image
                borderRadius={'full'}
                boxSize='100px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
                />
            </Heading>
            <HStack spacing={'40px'}>
                <Link>Inicio</Link>
                <Link>Tasaciones</Link>
                <Link>Nosotros</Link>
                <Link>Contacto</Link>
            </HStack>
        </Flex>
        <Link>
            Ingresar
        </Link>
    </Flex>
  )
}

export default NavBar