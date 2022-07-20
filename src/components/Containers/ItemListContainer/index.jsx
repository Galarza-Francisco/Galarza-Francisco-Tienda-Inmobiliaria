import {HStack, Spinner } from '@chakra-ui/react'
import React,{useState, useEffect} from 'react'
import ItemList from '../../ItemList'
import {useParams} from 'react-router-dom';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/config';

const ItemListContainer = ({ greeting }) => {


  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const params = useParams()
  

  useEffect(() => {

    const getProductos = async () => {
      try {

        const q = query(collection(db, "propiedades"));
        const querySnapshot = await getDocs(q);
        const productos = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          productos.push({id: doc.id, ...doc.data()})
        });
        console.log(productos);

        // const response = await fetch('https://fakestoreapi.com/products');
        // const data = await response.json()
        setProductos(productos);
        setProductosFiltrados(productos);
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