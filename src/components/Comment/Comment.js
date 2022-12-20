import React from 'react'
import { ListComment } from './ListComment'

export const Comment = (props) => {
  return (
    <div className="p-20 font-[Satoshi]">
        <h1 className=' text-2xl font-bold my-10'>Comment</h1>
        <ListComment />
    </div>
  )
}

