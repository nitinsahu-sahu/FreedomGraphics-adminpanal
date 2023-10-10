import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { signout } from '../../redux/action/adminAuth.action';

const Navbar = () => {
    const Admin_Details = useSelector(state => state.adminAuth);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signout())
    }
    return (
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top  border-bottom">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
                    aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars />
                </button>
                <NavLink className="navbar-brand" to="/">
                    <img src="./fgAdmin.png" height="25" alt="freedom graphics logo" loading="lazy" />
                </NavLink>
                <div className="dropdown">
                    <NavLink className="btn btn-secondary dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={`http://localhost:8000/public/${Admin_Details.user.profile_pic}`} className="rounded-circle"
                            height="30" alt="Avatar" loading="lazy" />

                        <span className='text-uppercase p-2'>{Admin_Details.user.fullname}</span>
                    </NavLink>
                    <ul className="dropdown-menu mt-2 p-2 border border-white" style={{ minWidth: "10.8rem", backgroundColor: "#212529" }} aria-labelledby="dropdownMenuLink">
                        <li><Link className="collapse-item text-decoration-none text-white" to={`mailto:${Admin_Details.user.email}`}>{Admin_Details.user.email}</Link></li>
                        <li><Link className="collapse-item text-decoration-none text-white" to="/profile">Profile</Link></li>
                        <li><Link className="collapse-item text-decoration-none text-white" onClick={logout}>Signout</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar