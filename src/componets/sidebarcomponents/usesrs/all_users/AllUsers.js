import React from 'react'
import Layout from '../../../layout/Layout'
import DataTable from 'datatables.net-dt';
import {PageHeader} from '../../../commonComponents/common';
import { useDispatch, useSelector } from 'react-redux';
import { maintainIsDeleteStatus, maintainStatus } from '../../../../redux/action/status.action';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDeleteForever } from 'react-icons/md';



const AllUsers = () => {
  const UsersList = useSelector(state => state.fatchDatas.fatchusers);
  const dispatch = useDispatch()
  const userStatus = (userId, status) => {
    dispatch(maintainStatus(userId, status))
  }
  const is_deleteStatus = (userId, status) => {
    dispatch(maintainIsDeleteStatus(userId, status))
  }

  let table = new DataTable('#userTable');
  return (
    <Layout>
      <div className="container-fluid py-5 " style={{ backgroundColor: "#F8F6D8" }}>
        <PageHeader pagetitle="USER DATA" cn="text-dark fw-bold" />
        <div className='container-fluid px-4'>
          <div className="row">
            <table id="userTable" className="table table-striped">
              <thead>
                <tr className='text-white bg-success'>
                  <th>_id</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  UsersList.map((data, index) =>
                    data.is_delete == 0 ?
                      <tr key={index}>
                        <td>{data._id}</td>
                        <td>{data.user_name}</td>
                        <td>{data.first_name}</td>
                        <td className='text-capitalize'>{data.role}</td>
                        <td>{data.email}</td>
                        <td>
                          {
                            data.status == 0 ?
                              <div style={{ width: 15, height: 15, background: '#00FF00', borderRadius: "50%" }} onClick={() => userStatus(data._id, 1)}></div> :
                              <div style={{ width: 15, height: 15, background: '#ff2500', borderRadius: "50%" }} onClick={() => userStatus(data._id, 0)}></div>
                          }
                        </td>
                        <td>
                          <div className='d-flex '>
                              <button type="button" className="btn btn-danger btn-sm fw-bold mx-1" onClick={() => is_deleteStatus(data._id, 1)}><MdOutlineDeleteForever /></button>
                              <button type="button" className="btn btn-info btn-sm fw-bold mx-1" data-bs-toggle="tooltip" data-bs-placement="right" title={data._id} ><FiEdit /></button>
                          </div>
                        </td>
                      </tr> :
                      ""
                  )
                }
              </tbody>
              <tfoot>
                <tr className='text-white bg-success'>
                  <th>_id</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th>Status</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AllUsers

