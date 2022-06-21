import { Flex,HStack, Link } from '@chakra-ui/react'
import React from 'react'
import CartWidget from './CartWidget'
import { Image } from '@chakra-ui/react'
import Logo from '../assets/logo.jpeg'

function NavBar() {
  return (
    <Flex px='200px' py={'30px'} width='full' justifyContent='space-between' alignItems={'flex-end'}>
        <Flex alignItems={'flex-end'}>
            <HStack spacing={'40px'}>
                <Link><Image boxSize={'150px'} bo src={Logo} alt='Logo inmobliiaria'/></Link>
                <Link>Inicio</Link>
                <Link>Tasaciones</Link>
                <Link>Nosotros</Link>
                <Link>Contacto</Link>
                <Link><CartWidget/></Link>
            </HStack>
        </Flex>
    </Flex>
    )}

export default NavBar