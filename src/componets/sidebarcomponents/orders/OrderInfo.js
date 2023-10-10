import React from 'react'
import { PriceFormat } from '../../commonComponents/common'

const OrderInfo = (props) => {
    let { orderedItems,
        totalAmmount,
        paymentStatus,
        paymentType } = props
    return (
        <>
            <div className='col-md-6'>
                <p className='fw-bold'>Items</p>
                {
                    orderedItems.map((Items,index)=>
                    <p className='text-capitalize'>{Items.productId.name}</p>
                    )
                }
            </div>
            <div className='col-md-2'>
                <p className='fw-bold'>Total Price</p>
                <p className='text-capitalize'><PriceFormat price={totalAmmount}/></p>
            </div>
            <div className='col-md-2'>
                <p className='fw-bold'>Payment Type</p>
                <p  className='text-capitalize'>{paymentType}</p>
            </div>
            <div className='col-md-2'>
                <p className='fw-bold'>Payment Status</p>
                <p  className='text-capitalize'>{paymentStatus}</p>
            </div>
        </>
    )
}

export default OrderInfo