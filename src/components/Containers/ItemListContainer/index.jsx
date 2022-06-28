import {HStack } from '@chakra-ui/react'
import React,{useState, useEffect} from 'react'
import ItemList from '../../ItemList'
// import ItemCount from '../../ItemCount';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState(null)

  useEffect(()=>{

    const getProductos = async() => {
      try {
        const response = await fetch('/mocks/data.json');
        const data = await response.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log('hubo un error:');
        console.log(error);
      }
    }
    getProductos();
  }, [])

  console.log(productos);

  return (
    <HStack justify={'center'}>
      {greeting}
      {productos ?
      <ItemList products={productos}/>
      :
      null
    }
    </HStack>
  )
}

export default ItemListContainer