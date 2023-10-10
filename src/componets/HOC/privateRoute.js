import React from 'react'
  import {Outlet, Navigate} from 'react-router-dom'


const Protected = () => {
  const adminToken = localStorage.getItem("admin_token");
    return (
      adminToken ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default Protected
