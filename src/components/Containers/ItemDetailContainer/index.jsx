import React, { useEffect, useState } from 'react'
import ItemDetail from '../../ItemDetail';
import {useParams} from 'react-router-dom';
import { HStack, Spinner } from '@chakra-ui/react';
import {doc, getDoc} from 'firebase/firestore';
import { db } from '../../../firebase/config';
//Obtener los datos de un producto
const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})
    
    const params = useParams();

    useEffect(()=> {
        const getProductos = async () => {
            try {
                // referencia del documento
                const docRef = doc(db, "propiedades", params.productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const productDetail = {id: docSnap.id, ...docSnap.data()}
                setProductDetail(productDetail)
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }



                // const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
                // const data = await response.json();
                // setProductDetail(data)
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