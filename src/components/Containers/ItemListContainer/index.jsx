import {HStack, Skeleton, Spinner } from '@chakra-ui/react'
import React,{useState, useEffect} from 'react'
import ItemList from '../../ItemList'
import {useParams} from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

  const [loading, setLoading] = useState([false]);

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const params = useParams()
  

  useEffect(() => {

    const getProductos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json()
        setProductos(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
    getProductos()
  }, [])

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(producto => producto.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])

  return (
    <HStack justify={'center'}>
      {productos.length !== 0 ?
      <ItemList products={productosFiltrados}/>
      :
      <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#E9BA2E'
            size='lg'
        />
    }
    </HStack>
  )
}

export default ItemListContainer