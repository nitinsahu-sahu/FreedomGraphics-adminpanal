import React from 'react'

const OrderStatus = (props) => {
    let { orderStatus } = props
    const formatDate = (date) => {
      if (date) {
        const d = new Date(date);
        return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
      }
      return "";
    };
    return (
        <div className="card card-stepper text-black" style={{ border: "none" }}>
            <ul id="progressbar-2" className="d-flex justify-content-between mx-0 mt-0 mb-3 px-0 pt-0 pb-2">
                {
                    orderStatus.map((status, index) =>
                        <li className={`step0 ${status.isCompleted ? 'active' : 'isActive'} text-center`} id={`step${index + 1}`} key={index}></li>
                    )
                }
            </ul>
            <div className="d-flex justify-content-between">
                {
                    orderStatus.map((status, index) =>
                        <div className="d-lg-flex align-items-center" key={index}>
                            <div>
                                <p className=" mb-1">{status.type}</p>
                                <p className=" mb-1">{formatDate(status.date)}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default OrderStatus