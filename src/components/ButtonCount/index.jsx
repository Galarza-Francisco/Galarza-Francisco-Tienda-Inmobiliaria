import { Box, Button, Flex, Tag } from '@chakra-ui/react';
import React, { useState } from 'react'

const ButtonCount = ({ onConfirm, maxQuantity }) => {

    const [value, setValue] = useState(1);

    const handleConfirm = () => {
        if (value <= maxQuantity) {
            onConfirm(value)
        }
        else {
            alert("Value > maxQuantity")
        }
    }
    return (
        <Flex
        flexDirection={'column'}
        >
           <Box textAlign={'center'}>
            <Button m={2} onClick={() => setValue(value => value+1)}>+</Button>
            <Tag m={2} p={3}>{value}</Tag>
            <Button m={2} onClick={() => setValue(value => value-1)}>-</Button>
            </Box>
            <Box textAlign={'center'}>

            <Button onClick={handleConfirm}>Agregar al carrito</Button>
            </Box>
        </Flex>
    )
}

export default ButtonCount