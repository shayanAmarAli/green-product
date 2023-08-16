'use client'
import { item } from "@/components/table";
import { createContext, useContext, useState } from "react";

export type items = {
  id: number;
  name: string;
  quantity: number;
  pricePerUnit: number;
  total_amount: number;
};

export const ItemContext = createContext<any>(null)

export function ItemContextComp({ children }: any) {
  const initialState: Array<items> = [{ id: 0, name: "", quantity: 0, pricePerUnit: 0, total_amount: 0 }]

  const [item, setItem] = useState(initialState)
  console.log('contextstate', item)
  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  )
}

export function useFormContext() {
  return useContext(ItemContext);
}


