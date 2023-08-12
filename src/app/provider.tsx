'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
const colors = {
  colorTheme: {
    900: '#A0C49D',
    800: '#C4D7B2',
    700: '#E1ECC8',
    600: '#F7FFE5',
  },
}
export const theme = extendTheme({ colors });

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}