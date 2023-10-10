import React, { useState } from 'react'
import Layout from '../../../layout/Layout'
import { FormButtonModule, FormInputModule, FormLabelModule } from '../../../commonComponents/form.module'
import { useDispatch, useSelector } from 'react-redux';
import { registerAdminUser } from '../../../../redux/action/createAdmin.action';
import {PageHeader} from '../../../commonComponents/common';
var randomstring = require("randomstring");


const AddNewUsers = () => {
  const [email, setEmail] = useState("")
  const [first_name, setFirstname] = useState("")
  const [last_name, setLastname] = useState("")
  const [role, setRole] = useState("")
  const [password, setPassword] = useState(randomstring.generate({ length: 12 }))
  const dispatch = useDispatch()
  const Admin_Details = useSelector(state => state.newAdminUser);
  const creatAdminUser = async (e) => {
    e.preventDefault();
    const createUserData = {
      email,
      password,
      first_name,
      last_name,
      role
    }
    dispatch(registerAdminUser(createUserData))
    setEmail("")
    setLastname("")
    setFirstname("")
    setRole("")
  }
 
  return (

    <Layout>
      <div className="container-fluid bg-dark py-5">
        <PageHeader cn="text-white fw-bold" pagetitle="CREATE USERS" />
        <div className="row">
          <div className='container-fluid px-4'>
            <div className="text-center">
              {
                Admin_Details.message == "" ? <p className="text-danger fw-bold">{Admin_Details.error}</p> : <p className="text-success fw-bold" >{Admin_Details.message}</p>
              }
              {/* <p className="text-danger fw-bold">{Admin_Details.message}</p> */}
            </div>
            <form onSubmit={creatAdminUser} >
              <div className="form-group row">
                <div className="col-sm-6 mb-3">
                  <FormLabelModule cn="form-label text-white" title="First Name" />
                  <FormInputModule typ="text" cn="form-control form-control-lg" val={first_name} onChange={e => setFirstname(e.target.value)} />
                </div>
                <div className="col-sm-6 mb-3 ">
                  <FormLabelModule cn="form-label text-white" title="Last Name" />
                  <FormInputModule typ="text" cn="form-control form-control-lg" val={last_name} onChange={e => setLastname(e.target.value)} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12 mb-3">
                  <FormLabelModule cn="form-label text-white" title="Email" />
                  <FormInputModule typ="email" cn="form-control form-control-lg" val={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-6 mb-3">
                  <FormLabelModule cn="form-label text-white" title="Password" />
                  <FormInputModule typ="text" cn="form-control form-control-lg" val={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="col-sm-6">
                  <FormLabelModule cn="form-label text-white" title="Role" />
                  {/* <FormInputModule typ="text" cn="form-control form-control-lg" val={role} onChange={e => setRole(e.target.value)} /> */}
                  <select value={role} onChange={e => setRole(e.target.value)} className="form-select form-control-lg text-capitalize" aria-label="Default select example" style={{ height: 48, fontSize: "1.25rem" }}>
                    <option selected>--select role</option>
                    <option value="administrator" selected>administrator</option>
                    <option value="shopmanager" >shopmanager</option>
                    <option value="customer">customer</option>
                    <option value="guest">guest</option>
                  </select>
                </div>
              </div>
              <div className='my-4'>
                <FormButtonModule cn="btn btn-outline-light btn-lg px-5" typ="submit" btntitle="Add New User" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AddNewUsers