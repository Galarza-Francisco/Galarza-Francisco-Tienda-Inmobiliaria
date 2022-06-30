import React from 'react';
import './styles.css'
import { Flex, Spacer, Text, useMediaQuery, Icon } from '@chakra-ui/react';
import { MdOutlineRealEstateAgent } from "react-icons/md";
import {BsBuilding} from 'react-icons/bs'
import { BsCalculator} from "react-icons/bs";
 
const Caracteristicas = () => {
  const [isLargerThan48] = useMediaQuery('(min-width: 48em)');
 
  const array = [
    {
      id: 1,
      title: 'Servicios Inmobiliarios',
      text: ' Operaciones de compra venta, alquiler de propiedades y asesoría profesional personalizada en toda gestión de bienes raíces.',
      icon: MdOutlineRealEstateAgent,
    },
    {
      id: 2,
      title: 'Tasaciones',
      text: 'Darle un correcto valor a un inmueble es determinante para el éxito en la venta, coordinamos y realizamos tasaciones en el día.',
      icon: BsCalculator,
    },
    {
      id: 3,
      title: 'Inversiones',
      text: 'Gestión y asesoramiento profesional íntegro y personalizado para inversiones en activos inmobiliarios rentables en el exterior.',
      icon: BsBuilding,
    },
  ];
 
  return (
    <Flex
      minH="70vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThan48 ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThan48 ? 'row' : 'column'}
    >
      {array.map((arr) => (
        <>
          <Flex
            height="300px"
            width={isLargerThan48 ? '32%' : 'full'}
            shadow='lg'
            p="6"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThan48 ? '0' : '4'}
            border="1px solid blackAlpha.200"
          >
            <Icon className='iconFeature' as={arr.icon} boxSize={14} color="#E9BA2E" mb="5" />
            <Text fontSize={'1.5rem'} p='2'>{arr.title}</Text>
            <Text>{arr.text}</Text>
          </Flex>
 
          <Spacer />
        </>
      ))}
    </Flex>
  );
};
 
export default Caracteristicas; 