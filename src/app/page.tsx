"use client"
import {
    Heading, Text, Input, Grid, Flex, Button, Box, Spacer, Stack, Wrap, WrapItem, FormHelperText,
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer
} from '@chakra-ui/react'
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

const Page = () => {
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
        <InvoiceApp/>
    )
}

export default Page
