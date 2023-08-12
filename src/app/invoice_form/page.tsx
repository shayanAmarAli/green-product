"use client"
import { Heading, Text, Input, Grid, Flex, Button, Box, Spacer, Stack, Wrap, WrapItem, FormHelperText } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Items from '@/components/table';
import "react-datepicker/dist/react-datepicker.css";


const page = () => {
    const [startDate, setStartDate] = useState(new Date());


    return (
        <Box bg={"colorTheme.700"} width={"80%"} margin={"auto"} px={"20px"}>
            <Heading as={"h3"} py={"1.5"} pt={"20px"}>Personal Information</Heading>
            <Flex wrap={"wrap"}>
                <Box>
                    <Text as='h3' py='1.5'>Contractor Name</Text>
                    <Input placeholder='Enter inputs' outline={"none"} bg={"white"}/>
                </Box>
                <Spacer />
                <Box>
                    <Text as='h3' py='1.5'>Customer N</Text>
                    <Input placeholder='Enter inputs' outline={"none"} bg={"white"}/>
                </Box>
                <Spacer />
                <Box>
                    <Text as='h3' py='1.5'>Issue Date</Text>
                    <DatePicker className=' py-2 px-3 rounded-lg text-gray-400 border-2 border-gray-200' selected={startDate} onChange={(date: any) => setStartDate(date)} />
                </Box>
                <Spacer />
                <Box>
                    <Text as='h3' py='1.5'>Due date</Text>
                    <Input placeholder='Enter inputs' outline={"none"} bg={"white"}/>
                </Box>
                <Spacer />
                <Box>
                    <Text as='h3' py='1.5'>Invoice Form</Text>
                    <Input placeholder='Enter inputs' outline={"none"} bg={"white"}/>
                </Box>
            </Flex>
            <Heading as={"h3"} py={"1.5"} pt={"20px"}>Items Detail</Heading>
            <Flex wrap={"wrap"} pb={"1.5"}>
                <Box>
                    <Text as='h3' py='1.5'>Item Name</Text>
                    <Input placeholder='Enter inputs' outline={"none"} bg={"white"}/>
                </Box>
                <Spacer />
                <Box>
                    <Text as='h3' py='1.5'>Quantity</Text>
                    <Input placeholder='Enter inputs' outline={"none"} bg={"white"}/>
                </Box>
                <Spacer />
                <Box>
                    <Text as='h3' py='1.5'>Unit Price</Text>
                    <Input placeholder='Enter inputs' outline={"none"} bg={"white"}/>
                </Box>
                <Spacer />
                <Box paddingTop={"10px"}>
                <Button bg={"white"} rounded={"7px"}> Add Item</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default page
