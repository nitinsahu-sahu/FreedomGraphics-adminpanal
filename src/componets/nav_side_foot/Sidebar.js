import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            {/* <!-- Sidebar --> */}
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-dark">
                <div className="position-sticky">
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " id="accordionSidebar">
                        <div className="list-group list-group-flush mx-3 mt-4">
                            <NavLink className="btn btn-secondary my-2" to="/">Dashboard</NavLink>
                        </div>
                        <div className="list-group list-group-flush mx-3 mt-2">
                            <NavLink className="btn btn-secondary " data-bs-toggle="collapse" to="#userCollapse" role="button" aria-controls="userCollapse">Users</NavLink>
                            <div className="col my-2">
                                <div className="collapse multi-collapse" id="userCollapse">
                                    <div className="card card-body bg-dark  border border-white">
                                        <NavLink className="collapse-item text-decoration-none text-white" to="/users">All Users </NavLink>
                                        <NavLink className="collapse-item text-decoration-none text-white" to="/user-new">Add New</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group list-group-flush mx-3">
                            <NavLink className="btn btn-secondary " data-bs-toggle="collapse" to="#productCollapse" role="button" aria-controls="productCollapse">Producs</NavLink>
                            <div className=" my-2">
                                <div className="col">
                                    <div className="collapse multi-collapse" id="productCollapse">
                                        <div className="card card-body bg-dark  border border-white">
                                            <NavLink className="collapse-item text-decoration-none text-white" to="/products">All Producs</NavLink>
                                            <NavLink className="collapse-item text-decoration-none text-white" to="/product-new">Add New</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group list-group-flush mx-3 ">
                            <NavLink className="btn btn-secondary" to="/category">Categories</NavLink>
                        </div>
                        <div className="list-group list-group-flush mx-3 mt-3">
                            <NavLink className="btn btn-secondary" to="/orders">Orders</NavLink>
                        </div>
                    </ul>
                </div>
            </nav>
            {/* <!-- Sidebar --> */}
        </>
    )
}

export default Sidebar