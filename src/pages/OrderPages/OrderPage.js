import React from 'react'
import { Bill } from '../../components/Order/Bill'
import { OrderTabPages } from '../../components/Order/OrderTabPages'
const OrderPage = () => {
  return (
    <div className='mt-20 mb-20 flex justify-center'>
        <div className='w-[70%] flex justify-between flex-row'>
            <OrderTabPages />
            <Bill />
        </div>
    </div>
  )
}

export default OrderPage
