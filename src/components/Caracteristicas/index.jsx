// import { Box, Divider, Flex, Icon,Text, Center } from '@chakra-ui/react'
// import {BsCalculator, BsBuilding} from 'react-icons/bs'
// import{MdOutlineRealEstateAgent} from 'react-icons/md'
// import './styles.css'
// import React from 'react';

// const Caracteristicas = () => {
//   return (
//     <Flex 
//     maxW='1000px'
//     w={['90vw','90vw','90vw','70vw']}
//     justify='center'
//     direction={['column', 'column', 'row', 'row']}
//     boxShadow='md'
//     rounded='lg'
//     p='4'>

//         <Flex align='center' mx='2' >
//           <Icon className='iconFeature' fontSize='4rem' color="#E9BA2E" as={MdOutlineRealEstateAgent}/>
//           <Box mx='4'>
//             <Text as='h2' fontWeight='medium' fontSize='xl' mb='2'>
//               servicios Inmobiliarios
//             </Text>
//             <Text as='h3' fontWeight='light' fontSize='md' >
//               Operaciones de compra venta, alquiler de propiedades y asesoría profesional personalizada en toda gestión de bienes raíces.
//             </Text>
//           </Box>
//         </Flex>
//         <Center height='200px' >
//           <Divider orientation='vertical' my='2' padding='3' />
//         </Center>
//         <Flex align='center' mx='2'>
//           <Icon className='iconFeature' fontSize='4rem' color={"#E9BA2E"} as={BsCalculator}/>
//           <Box mx='5'>
//             <Text as='h2' fontWeight='medium'textAlign={'center'} fontSize='xl' mb='2'>Tasaciones</Text>
//             <Text as='h3' fontWeight='light' fontSize='md' >Darle un correcto valor a un inmueble es determinante para el éxito en la venta, coordinamos y realizamos tasaciones en el día.</Text>
//           </Box>
//         </Flex>
//         <Center height='200px' >
//           <Divider orientation='vertical' my='2'  padding='3'  />
//         </Center>
//         <Flex align='center' mx='2'>
//           <Icon className='iconFeature' fontSize='4rem' color="#E9BA2E" as={BsBuilding}/>
//           <Box mx='4'>
//             <Text as='h2' fontWeight='medium' fontSize='xl' mb='2'>Inversiones</Text>
//             <Text as='h3' fontWeight='light' fontSize='md' >Gestión y asesoramiento profesional íntegro y personalizado para inversiones en activos inmobiliarios rentables en el exterior.</Text>
//           </Box>
//         </Flex>
//     </Flex>
//   )
// }

// export default Caracteristicas



import { Container, Flex, Heading, HStack, Box, Text, Icon, WrapItem } from '@chakra-ui/react'
import {MdOutlineRealEstateAgent} from 'react-icons/md'
import React from 'react'

const Caracteristicas = () => {
  return (
    <Container textAlign={'center'} maxW="container.x-lg" p='10'>
        <Heading>Por que elegirnios?</Heading>
        <Text p={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, perspiciatis nemo! Quas velit quasi qui.</Text>
      <Flex h={'80vh'} py={20}>
        <HStack 
        bg='gray.50'
        w='full'
        h='full'
        p={10}
        spacing={10}
        align='center'>
          <WrapItem>
            <Box overflow='hidden' p={5} shadow='md' borderWidth='2px'>
              <Icon className='iconFeature' fontSize='5rem' color="#E9BA2E" as={MdOutlineRealEstateAgent}/>
              <Box>
                <Heading p={8} fontSize='xl'>Servicios Inmobiliarios</Heading>
                <Text>Operaciones de compra venta, alquiler de propiedades y asesoría profesional personalizada en toda gestión de bienes raíces.</Text>
              </Box>
            </Box>
            <Box w='100%' overflow='hidden' p={5} shadow='md' borderWidth='2px'>
              <Icon className='iconFeature' fontSize='5rem' color="#E9BA2E" as={MdOutlineRealEstateAgent}/>
              <Box>
                <Heading p={8} fontSize='xl'>Servicios Inmobiliarios</Heading>
                <Text>Operaciones de compra venta, alquiler de propiedades y asesoría profesional personalizada en toda gestión de bienes raíces.</Text>
              </Box>
            </Box>
            <Box w='100%' overflow='hidden' p={5} shadow='md' borderWidth='2px'>
              <Icon className='iconFeature' fontSize='5rem' color="#E9BA2E" as={MdOutlineRealEstateAgent}/>
              <Box>
                <Heading p={8} fontSize='xl'>Servicios Inmobiliarios</Heading>
                <Text>Operaciones de compra venta, alquiler de propiedades y asesoría profesional personalizada en toda gestión de bienes raíces.</Text>
              </Box>
            </Box>
          </WrapItem>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Caracteristicas

