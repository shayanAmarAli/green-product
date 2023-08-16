'use client'
import Image from 'next/image'
import { useContext } from 'react'
import { ItemContext } from '@/Global-State/Contexts/context'
import { client_detail } from '@/Global-State/Contexts/constext'
import { useFormContext } from '@/Global-State/Contexts/context';
import Link from 'next/link'

export default function Home() {

  // const { item, setItem } = useContext(ItemContext);
  const {client, setClient} = useContext(client_detail);
  const { item } = useFormContext();
  return (
    <>
      <main>{JSON.stringify(item)}
      </main>
      {/* <Link href={"/"}>
        <button
        onClick={(e:any)=>{
          e.preventDefault()
          setClient({client_name:"shahad"})
        }}
        >change customer detail</button>
      </Link> */}

      <h1>{JSON.stringify(item.name)}</h1>
      <h1>{JSON.stringify(item.pass)}</h1>
    </>

  )
}
