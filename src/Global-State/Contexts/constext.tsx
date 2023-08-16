"use client"

import React from 'react'
import { item } from "@/components/table";
import { createContext, useState, useContext } from "react";

export const client_detail = createContext<any>(null);

type client_type = {
    customer: string,
    contractor: string,
    customer_address: string,
    contractor_address: string,
}

const CustomerConstext = ({ children }: any) => {
    const clientCredential: client_type = {
        customer: "",
        contractor: "",
        customer_address: "",
        contractor_address: "",
    }

    const [client, setClient] = useState(clientCredential);

    return (
        <client_detail.Provider value={{ client, setClient }}>
            {children}
        </client_detail.Provider>
    )
}

export default CustomerConstext

export function FormContext() {
    return useContext(client_detail);
}
