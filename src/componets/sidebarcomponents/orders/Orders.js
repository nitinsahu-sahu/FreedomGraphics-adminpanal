import Layout from '../../layout/Layout'
import React from "react";
import { useSelector } from "react-redux";
// import { updateOrder } from "../../actions";
import { PageHeader } from '../../commonComponents/common';
import OrderStatus from './OrderStatus';
import OrderStateUpdater from './OrderStateUpdater';
import OrderInfo from './OrderInfo';
const Orders = () => {
  const order = useSelector((state) => state.order);

  return (
    <Layout >
      <div className="container-fluid bg-dark py-5">
        <PageHeader cn="text-white fw-bold" pagetitle="ORDERS TRACKER" />
        {
          order.orders.map((items, index) =>
            <div className="card my-2" key={index}>
              <div className="card-header">
                ORDER ID : {items._id}
              </div>
              <div className="card-body">
                <div className='container'>
                  <div className='row' >
                    <OrderInfo
                      orderedItems={items.items}
                      totalAmmount={items.totalAmount}
                      paymentStatus={items.paymentStatus}
                      paymentType={items.paymentType}
                    />
                  </div>
                  <div className='row' >
                    <div className='col-md-8 text-center text-capitalize'>
                      <OrderStatus orderStatus={items.orderStatus}/>
                    </div>
                    <OrderStateUpdater orderId={items._id} orderStatus={items.orderStatus}/>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      </div>
    </Layout>
  );
}

export default Orders