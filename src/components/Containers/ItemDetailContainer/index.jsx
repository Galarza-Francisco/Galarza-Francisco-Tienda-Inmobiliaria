import React, { useEffect, useState } from 'react'
import ItemDetail from '../../ItemDetail';
import {useParams} from 'react-router-dom';
import { HStack, Spinner } from '@chakra-ui/react'

//Obtener los datos de un producto
const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})
    
    const params = useParams();

    useEffect(()=> {
        const getProductos = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
                const data = await response.json();
                setProductDetail(data)
            } catch (error) {
                console.log(error);
            }
        }
        getProductos();

    }, [params])

    return (
        Object.keys(productDetail).length !== 0 ?
        <ItemDetail product={productDetail}/>
        :
        <HStack justify={'center'}>
            <Spinner
                textAlign={'center'}
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='#E9BA2E'
                size='lg'
            />
        </HStack>
    )
}

export default ItemDetailContainer