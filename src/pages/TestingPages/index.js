import { useEffect } from "react"
import React from 'react'
import { ProductApi } from "../../api/productApi"
export const TestingPages = () => {
  useEffect(()=>
    console.log(ProductApi.ReadOneProduct("6253ef7f5b01a8842718b366"))
  ,[])
  return (
    <div>TestingPages
    </div>
  )
}
