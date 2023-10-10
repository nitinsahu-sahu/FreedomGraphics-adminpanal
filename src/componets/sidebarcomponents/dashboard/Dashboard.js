import React from 'react'
import Layout from '../../layout/Layout'
import {PageHeader} from '../../commonComponents/common'
const Dashboard = () => {
  return (
    <Layout>
      <div className="container-fluid bg-dark py-5">
        <PageHeader pagetitle="DASHBOARD" cn="text-white fw-bold" />
        <div className='row g-3 mb-3'>
          <div className='col-md-6 col-xxl-3'>
            <div className='card h-md-100 '>
              <div className='card-header pb-0'>
                <h6 className='mb-0 d-flex align-item-center'>Total Users</h6>
              </div>
              <div className='card-body d-flex flex-column justify-content-end'>
                <div className='row '>
                  <div className="col">
                    <p className="font-sans-serif lh-1 mb-1 fs-4">$47K</p>
                    <span className="badge badge-soft-success rounded-pill fs--2">+3.5%</span>
                  </div>
                  <div className='col-auto ps-0'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard