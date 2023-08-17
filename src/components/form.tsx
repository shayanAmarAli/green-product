import { useState, useRef } from 'react';
import {
    Box, Button, Container, FormControl, FormLabel, Heading, Input, NumberInput,
    NumberInputField, Table, Tbody, Td, Th, Thead, Tr, VStack, HStack
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useReactToPrint } from 'react-to-print';
import { useFormContext } from '@/Global-State/Contexts/context'
import { FormContext } from '@/Global-State/Contexts/constext'
import jsPDF from 'jspdf';
import ImageUpload from '@/components/pdf';
import Client_signature from '@/app/signature/page';

export interface Product {
    id: number;
    name: string;
    quantity: number;
    pricePerUnit: number;
    total_amount: number
}
const InvoiceApp: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState<number>(0);
    const [pricePerUnit, setPricePerUnit] = useState<number>(0);
    const [productIdCounter, setProductIdCounter] = useState<number>(1);
    const [customer, setCustomer] = useState("")
    const [customerAddress, setCustomerAddress] = useState("")
    const [contractor, setContractor] = useState("")
    const [contractorAddress, setContractorAddress] = useState("");
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");

    const router = useRouter();
    const { setItem } = useFormContext()
    const { setClient } = FormContext()

    const handleProductSubmit = () => {
        if (!name || quantity <= 0 || pricePerUnit <= 0) {
            return; // Skip empty or invalid submissions
        }

        const newProduct: Product = {
            id: productIdCounter,
            name,
            quantity,
            pricePerUnit,
            total_amount: +(quantity) * +(pricePerUnit)
        };
        setProducts([...products, newProduct]);
        setProductIdCounter(productIdCounter + 1);

        // Reset form fields
        setName('');
        setQuantity(0);
        setPricePerUnit(0);
    };

    const handleImageUpload = (imageUrl: string) => {
        setUploadedImageUrl(imageUrl);
        if (uploadedImageUrl) {

            console.log(uploadedImageUrl);
        }
    };
    const onSubmitHandler = () => {
        setItem(products);
        setClient({
            customer: customer,
            contractor: contractor,
            customer_address: customerAddress,
            contractor_address: contractorAddress,
            client_signature: uploadedImageUrl
        })
        router.push("/pdf")
    }

    const removeProduct = (productId: number) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    const calculateTotal = () => {
        return products.reduce((total, product) => total + product.quantity * product.pricePerUnit, 0);
    };

    return (
        <Container maxW="2xl" boxShadow="base" borderRadius="md" bg="white">
            <Box display={'flex'} justifyContent={"space-between"} pt={"10px"}> <Heading as="h1" my={4}>
                Detail of work
            </Heading>
            </Box>
            <VStack p={4}>

                <FormControl >
                    <FormLabel>Customer Name</FormLabel>
                    <Input onChange={(e: any) => {
                        setCustomer(e.target.value);
                    }} />
                </FormControl>
                <FormControl>
                    <FormLabel>Customer Address</FormLabel>
                    <Input onChange={(e: any) => {
                        setCustomerAddress(e.target.value)
                    }} h={"20"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Contractor Name</FormLabel>
                    <Input onChange={(e: any) => {
                        setContractor(e.target.value)
                    }} />
                </FormControl>
                <FormControl>
                    <FormLabel>Contractor Address</FormLabel>
                    <Input onChange={(e: any) => {
                        setContractorAddress(e.target.value)
                    }} h={"20"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Issue Date</FormLabel>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormLabel>Due Date Address</FormLabel>
                    <Input />
                </FormControl>
            </VStack>
            <Box p={4} >
                <VStack spacing={4}>

                    <FormControl>
                        <FormLabel>Product Name</FormLabel>
                        <Input value={name} onChange={(e) => setName(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Quantity</FormLabel>
                        <NumberInput value={quantity} onChange={(value) => setQuantity(parseInt(value))} min={0}>
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Price Per Unit</FormLabel>
                        <NumberInput value={pricePerUnit} onChange={(value) => setPricePerUnit(parseFloat(value))} min={0}>
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>
                    <Button colorScheme="blue" onClick={handleProductSubmit}>
                        Add Product
                    </Button>
                </VStack>
                <Table mt={4} variant="simple">
                    <Thead>
                        <Tr>
                            <Th isNumeric> Id</Th>
                            <Th>Product Name</Th>
                            <Th isNumeric>Quantity</Th>
                            <Th isNumeric>Price Per Unit</Th>
                            <Th isNumeric>Total</Th>
                            <Th width="100px">Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products.map((product) => (
                            <Tr key={product.id}>
                                <Td isNumeric> {product.id}</Td>
                                <Td>{product.name}</Td>
                                <Td isNumeric>{product.quantity}</Td>
                                <Td isNumeric>${product.pricePerUnit.toFixed(2)}</Td>
                                <Td isNumeric>${(product.quantity * product.pricePerUnit).toFixed(2)}</Td>
                                <Td>
                                    <Button colorScheme="red" size="sm" width="100%" onClick={() => removeProduct(product.id)}>
                                        Remove
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Box mt={4}>
                    <Heading as="h2" size="md" textAlign={"end"}>
                        Total: ${calculateTotal().toFixed(2)}
                    </Heading>
                </Box>
            </Box>
            <Button width={"full"} bg={"gray.300"} onClick={() => onSubmitHandler()}>SUBMIT INVOICE</Button>
        </Container>
    );
};

export default InvoiceApp;