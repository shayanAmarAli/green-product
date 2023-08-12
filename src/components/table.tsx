import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import React from 'react'

export type item = {
    quantity: number,
    description: string,
    unit_price: number
}

const Items = ({ quantity, description, unit_price }: item) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Quantity</Th>
                        <Th>Description</Th>
                        <Th>Unit Price</Th>
                        <Th>Total Amount</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>{quantity}</Td>
                        <Td>{description}</Td>
                        <Td>{unit_price}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default Items;
