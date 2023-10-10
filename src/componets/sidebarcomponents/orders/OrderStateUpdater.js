import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { FormButtonModule, FormInputModule } from '../../commonComponents/form.module';
import { updateOrder } from '../../../redux/action/order.action';


const OrderStateUpdater = (props) => {
    console.log(props.orderStatus);
    const [type, setType] = useState("");
    const [orderId, setOrderId] = useState(props.orderId);
    const dispatch = useDispatch();

    const onOrderUpdate = async (e) => {
        e.preventDefault();
        const payload = {
            orderId,
            type,
        };
        dispatch(updateOrder(payload));
    }
    return (
        <form onSubmit={onOrderUpdate} style={{ display: "contents" }}>
            <div className='col-md-2 text-center text-capitalize'>
                <select className="form-select" aria-label="orderType" onChange={(e) => setType(e.target.value)} value={type}>
                    <option >--Select--</option>
                    {
                        props.orderStatus.map((status, index) =>
                            status.isCompleted ? '' : <option key={index} value={status.type} className='text-capitalize'>{status.type}</option>
                        )
                    }
                </select>
                <FormInputModule typ="hidden" cn="form-control form-control-lg" val={orderId} onChange={e => setOrderId(e.target.value)} />
            </div>
            <div className='col-md-2'>
                <FormButtonModule cn="btn btn-outline-success" typ="submit" btntitle="UPDATE" />
            </div>
        </form>
    )
}

export default OrderStateUpdater