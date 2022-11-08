import { useEffect } from "react"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchTestApi } from "../../store/slices/TestApiSlice"
export const TestingPages = () => {
  const test = useSelector((state) => state.test)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTestApi())
  },[])
  const entries = test.entries
  console.log(entries)

  return (
    <div>TestingPages
    </div>
  )
}
