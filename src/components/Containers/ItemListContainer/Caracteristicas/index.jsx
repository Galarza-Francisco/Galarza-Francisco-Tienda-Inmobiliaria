import { Container, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import './styles.css'
import { FaRegBuilding } from 'react-icons/fa'
import React from 'react'

 // caracteristicas 
export const Caracteristicas = () => {
  return (

    <Container className='caracteristicas'>
        <Stack>
            <Stack>
              <Stack className='elegirnos' align={'center'} mb='40px' p='2'>
                <Text m={'5px'} p='20px' fontSize='4xl'>¿Porque elegirnos?</Text>
                <Text fontSize='sm'>Brindamos un servicio completo en cada paso.</Text>
              </Stack>
            </Stack>
            <Flex className='container-cards'>
               <Stack className='cards-caracteriticas' shadow={'md'} p='2' m={'2'} align='center'>
                  <Flex><Icon fontSize={'3.5rem'} as={FaRegBuilding}/></Flex>
                  <Stack textAlign={'center'}>
                    <Text>Inversiones</Text>
                    <Text>Operaciones de compra venta, alquiler de propiedades y asesoría profesional personalizada en toda gestión de bienes raíces.</Text>
                  </Stack>  
                </Stack> 
                <Stack className='cards-caracteriticas' shadow={'md'} p='2' m={'2'} align='center'>
                  <Flex><Icon fontSize={'3.5rem'} as={FaRegBuilding}/></Flex>
                  <Stack textAlign={'center'}>
                    <Text>Inversiones</Text>
                    <Text>Operaciones de compra venta, alquiler de propiedades y asesoría profesional personalizada en toda gestión de bienes raíces.</Text>
                  </Stack>  
                </Stack>
                <Stack className='cards-caracteriticas' shadow={'md'} p='2' m={'2'} align='center'>
                  <Flex><Icon fontSize={'3.5rem'} as={FaRegBuilding}/></Flex>
                  <Stack textAlign={'center'}>
                    <Text>Inversiones</Text>
                    <Text>Operaciones de compra venta, alquiler de propiedades y asesoría profesional personalizada en toda gestión de bienes raíces.</Text>
                  </Stack>  
                </Stack>
            </Flex>
        </Stack>
    </Container>

    
  )
}
// caracteristicas end
