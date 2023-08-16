"use client"

import {useEffect, useState } from "react"

const page = () => {
    const [winWidht, setWinWidth] = useState(window.innerWidth);
    useEffect(()=>{
        setWinWidth(window.innerWidth);
    },[]);

  return (
    <div>
      {winWidht}
    </div>
  )
}

export default page
