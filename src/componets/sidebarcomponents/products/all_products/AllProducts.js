import React from 'react'
import {PageHeader} from '../../../commonComponents/common';
import DataTable from 'datatables.net-dt';
import Layout from '../../../layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { maintainProductIsDeleteStatus, maintainProductStatus } from '../../../../redux/action/status.action';

const AllProducts = () => {
  const ProducsList = useSelector(state => state.product.products);
  let table = new DataTable('#userTable');
  const dispatch = useDispatch()
  const productStatus = (proId, status) => {
    dispatch(maintainProductStatus(proId, status))
  }
  const is_deleteStatus = (proId, status) => {
    dispatch(maintainProductIsDeleteStatus(proId, status))
  }
  return (
    <Layout>
      <div className="container pt-3" style={{ backgroundColor: "#F8F6D8" }}>
        <PageHeader pagetitle="PRODUCTS DATA" />
        <div className="row">
          <div className='container-fluid px-4'>
            <table id="userTable" className="table table-striped dark">
              <thead>
                <tr >
                  <th>S.No</th>
                  <th>Product_name</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  ProducsList.map((items, index) =>
                    <tr key={items._id}>
                      <td>{index + 1}</td>
                      <td>{items.name}</td>
                      <td>{items.stock}</td>
                      <td>₹ {items.price}</td>
                      <td className="d-flex justify-content-center">
                        <img src={`http://localhost:8000/public/${items.featuredImg}`} height={50} width={50} />
                      </td>
                      <td >
                        {
                          items.status == 0 ?
                            <div style={{ width: 15, height: 15, background: '#00FF00', borderRadius: "50%" }} onClick={() => productStatus(items._id, 1)}></div> :
                            <div style={{ width: 15, height: 15, background: '#ff2500', borderRadius: "50%" }} onClick={() => productStatus(items._id, 0)}></div>
                        }
                      </td>
                      <td>
                          <div className='row'>
                            <div className='col-sm-12 col-md-12 col-lg-6'>
                              <button type="button" className="btn btn-danger btn-sm fw-bold" onClick={() => is_deleteStatus(items._id, 1)}>Delete</button>
                            </div>
                            <div className='col-sm-12 col-md-12 col-lg-6'>
                              <button type="button" data-bs-toggle="tooltip" data-bs-placement="right" title={items._id} className="btn btn-info btn-sm fw-bold">Edit</button>
                            </div>
                          </div>
                        </td>
                    </tr>
                  )
                }
              </tbody>
              <tfoot>
                <tr >
                  <th>S.No</th>
                  <th>Product_name</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AllProducts