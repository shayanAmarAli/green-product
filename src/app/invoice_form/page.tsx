"use client"
import {
    Heading, Text, Input, Grid, Flex, Button, Box, Spacer, Stack, Wrap, WrapItem, FormHelperText,
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer
} from '@chakra-ui/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useForm, SubmitHandler } from "react-hook-form"
import React, { useState, useContext } from 'react'
import { ItemContext } from '@/Global-State/Contexts/context'
import { client_detail } from '@/Global-State/Contexts/constext'
import { useFormContext } from '@/Global-State/Contexts/context'
import { FormContext } from '@/Global-State/Contexts/constext'
import { useRouter } from 'next/navigation';
import InvoiceApp from '@/components/form';

type item = {
    quantity: number,
    description: string,
    unit_price: number
    total_amount: number
}

const todayDate = new Date();
const strTodayDate = String(todayDate);

const page = ({ children }: any) => {
    const [issueDate, setIssueDate] = useState(strTodayDate);
    const [dueDate, setDueDate] = useState("");
    const [customer, setCustomer] = useState("");
    const [contractor, setContractor] = useState("");
    const router = useRouter();
    const { setItem } = useFormContext()
    const { setClient } = FormContext()
    const [dataa, setDataa] = useState<item>({
        quantity: 0,
        description: "intial description",
        unit_price: 0,
        total_amount: 0
    })
    const [customerData, setCustomerData] = useState<Array<item>>([dataa]);
    const { register, handleSubmit } = useForm<item>();

    const onSubmit: SubmitHandler<item> = (data) => {
        setCustomerData((previousData: any) => {
            data.total_amount = +(data.quantity) * +(data.unit_price);
            setDataa(data);
            setItem({customer: customer,contractor: contractor, issue_data: issueDate,due_date: dueDate})
            setClient({quantity: data.quantity, description:data.description, unit_price: data.unit_price, total_amount: data.total_amount})
            return [...previousData, data]
        })
        router.push('/pdf');
    }

    return (
        // <Box bg={"colorTheme.700"} width={"90%"} margin={"auto"} px={"20px"}>
        //     <Heading as={"h3"} py={"1.5"} pt={"20px"}>Personal Information</Heading>
        //     <Flex wrap={"wrap"}>
        //         <Box>
        //             <Text as='h3' py='1.5'>Contractor Name</Text>
        //             <Input placeholder='Enter inputs' type='string' onChange={(e) => {
        //                 setContractor(e.target.value)
        //             }} outline={"none"} bg={"white"} />
        //         </Box>
        //         <Spacer />
        //         <Box>
        //             <Text as='h3' py='1.5'>Customer Name</Text>
        //             <Input placeholder='Enter inputs' type='string' onChange={(e) => {
        //                 setCustomer(e.target.value)
        //             }} outline={"none"} bg={"white"} />
        //         </Box>
        //         <Spacer />
        //         <Box>
        //             <Text as='h3' py='1.5'>Issue Date</Text>
        //             <Input placeholder='Enter inputs' value={issueDate}
        //                 onChange={(event: any) => {
        //                     setIssueDate(event.target.value)
        //                 }}
        //                 outline={"none"} bg={"white"} />
        //         </Box>
        //         <Spacer />
        //         <Box>
        //             <Text as='h3' py='1.5'>Due date</Text>
        //             <Input placeholder='Enter inputs' value={dueDate} outline={"none"} bg={"white"} />
        //         </Box>
        //         <Spacer />
        //         <Box>
        //             <Text as='h3' py='1.5'>Invoice Form</Text>
        //             <Input placeholder='Enter inputs' outline={"none"} bg={"white"} />
        //         </Box>
        //     </Flex>
        //     <Heading as={"h3"} py={"1.5"} pt={"20px"}>Items Detail</Heading>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <Flex wrap={"wrap"} pb={"1.5"}>
        //             <Box>
        //                 <Text as='h3' py='1.5'>Quantity</Text>
        //                 <Input {...register("quantity", { required: true, maxLength: 20, })} type='number' placeholder='Enter inputs' outline={"none"} bg={"white"} />
        //             </Box>
        //             <Spacer />
        //             <Box>
        //                 <Text as='h3' py='1.5'>Description</Text>
        //                 <Input {...register("description")} type='string' placeholder='Enter inputs' outline={"none"} bg={"white"} />
        //             </Box>
        //             <Spacer />
        //             <Box>
        //                 <Text as='h3' py='1.5'>Unit Price</Text>
        //                 <Input {...register("unit_price")} type='number' placeholder='Enter inputs' outline={"none"} bg={"white"} />
        //             </Box>
        //             <Spacer />
        //             <Box>
        //                 <Text as='h3' py='1.5'>Total Amount</Text>
        //                 <Input {...register("total_amount")} type='number' value={0} placeholder='Enter inputs' outline={"none"} bg={"white"} />
        //             </Box>
        //             <Spacer />
        //             <Box py={"1.5"}>
        //                 <Button type='submit' variant={"outline"} colorScheme='green' rounded={"7px"} >Add Item</Button>
        //             </Box>
        //         </Flex>
        //     </form>
        //     <Box>
        //         <TableContainer>
        //             <Table variant='simple'>
        //                 <TableCaption>Imperial to metric conversion factors</TableCaption>
        //                 <Thead>
        //                     <Tr>
        //                         <Th>Quantity</Th>
        //                         <Th>Description</Th>
        //                         <Th>Unit Price</Th>
        //                         <Th>Total Amount</Th>
        //                     </Tr>
        //                 </Thead>
        //                 {
        //                     customerData?.map((data: any, id: number) => {
        //                         return <Tbody key={id} scrollBehavior={"smooth"}>
        //                             <Tr gap={"3px"}>
        //                                 <Td bg={"white"} rounded={"xl"}>{data.quantity}</Td>
        //                                 <Td bg={"white"} rounded={"xl"}>{data.description}</Td>
        //                                 <Td bg={"white"} rounded={"xl"}>{data.unit_price}</Td>
        //                                 <Td bg={"white"} rounded={"xl"}>{data.total_amount}</Td>
        //                             </Tr>
        //                         </Tbody>
        //                     })
        //                 }
        //                 {

        //                 }
        //                 <Tr>
        //                     <Th>{ }</Th>
        //                     <Th>{ }</Th>
        //                     <Th>{ }</Th>
        //                     <Th>{ }</Th>
        //                 </Tr>
        //             </Table>
        //         </TableContainer>
        //     </Box>
        // </Box>
        <InvoiceApp/>
    )
}

export default page
