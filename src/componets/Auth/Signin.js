import React, { useEffect, useState } from 'react'
import { FormButtonModule, FormInputModule, FormLabelModule } from '../commonComponents/form.module'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin, isUserLoggedIn } from '../../redux/action/adminAuth.action'
import { useNavigate } from "react-router-dom";


const Signin = () => {
    const Admin_Details = useSelector(state => state.adminAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const adminLoginData = async (e) => {
        e.preventDefault();
        const admin_Login_Data = {
            email,
            password
        }
        dispatch(adminLogin(admin_Login_Data))
    }
    if (Admin_Details.authenticate) {
        setTimeout(() => {
            return navigate("/");
        }, "3000");
    }


    return (
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <form onSubmit={adminLoginData}>
                                <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                    <div className="card-body p-5 text-center">
                                        <div className="mb-md-5 mt-md-4 pb-5">
                                            <h2 className="fw-bold mb-2 text-uppercase">Admin Login</h2>
                                            {
                                                Admin_Details.message == "" ? <p className="text-danger fw-bold">{Admin_Details.error}</p> : <p className="text-success fw-bold" >{Admin_Details.message}</p>
                                            }
                                            {/* <p className="text-danger fw-bold mb-5">{Admin_Details.message == null ? Admin_Details.error : Admin_Details.message}</p> */}
                                            <div className="form-outline form-white mb-4">
                                                <FormInputModule typ="email" cn="form-control form-control-lg" val={email} onChange={e => setEmail(e.target.value)} />
                                                <FormLabelModule cn="form-label" title="Email" />
                                            </div>
                                            <div className="form-outline form-white mb-4">
                                                <FormInputModule typ="password" nm="password" val={password} cn="form-control form-control-lg" onChange={e => setPassword(e.target.value)} />
                                                <FormLabelModule cn="form-label" title="Password" />
                                            </div>
                                            <FormButtonModule cn="btn btn-outline-light btn-lg px-5" typ="submit" btntitle="Login" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin


