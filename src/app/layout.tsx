"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "./provider";
import { useState, createContext } from 'react';
import { item } from '@/components/table';
import { ItemContextComp } from '@/Global-State/Contexts/context';
import CustomerConstext from '@/Global-State/Contexts/constext';
// import { client, items } from "@/app/context"

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ItemContextComp>
            <CustomerConstext>
              {children}
            </CustomerConstext>
          </ItemContextComp>
        </Providers>
      </body>
    </html>
  )
}
