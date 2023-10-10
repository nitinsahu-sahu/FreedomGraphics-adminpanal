import React, { useState } from 'react'
import Layout from '../../../layout/Layout'
import { FiEdit } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { CommonModal } from '../../../commonComponents/common';
import { FormInputModule, FormLabelModule } from '../../../commonComponents/form.module';
import { updateAdminUser } from '../../../../redux/action/adminAuth.action';
const Profile = () => {
  const UsersData = useSelector(state => state.adminAuth.user);
  const AdminData = useSelector(state => state.adminAuth);
  const [updateProfileModal, setUpdateProfileModal] = useState(false)
  const [email, setEmail] = useState("")
  const [first_name, setFirstname] = useState(UsersData.first_name)
  const [last_name, setLastname] = useState(UsersData.last_name)
  const [contact_number, setContact_number] = useState(UsersData.contact_number)
  const [profileImg, setProfileImg] = useState([]);

  const dispatch = useDispatch()

  // const [password, setPassword] = useState(randomstring.generate({ length: 12 }))
  const editprofile = () => {
    setUpdateProfileModal(true)
    setFirstname(UsersData.first_name);
    setLastname(UsersData.last_name);
    setEmail(UsersData.email);
    setContact_number(UsersData.contact_number);

  }

  const handleProfileImage = (e) => {
    setProfileImg([
      ...profileImg,
      e.target.files[0]
    ]);
  }

  
  const updatedAdminDetails = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("contact_number", contact_number);
    for (let pic of profileImg) {
      formData.append("profile_pic", pic);
    }
    dispatch(updateAdminUser(formData))
  }


  return (
    <Layout>
      <div className="container py-5">
        {/* <Breadcrumb /> */}
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src={`http://localhost:8000/public/${UsersData.profile_pic}`} alt="profile"
                  className="rounded-circle img-fluid" style={{ width: 150 }} />

                <h5 className="my-3 text-capitalize">{UsersData.fullname}</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4 text-capitalize">{UsersData.role}</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary" onClick={editprofile}><FiEdit /></button>
                </div>
              </div>
            </div>
            {/* <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style="color: #333333;"></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                    <p className="mb-0">@mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0 text-capitalize">{UsersData.fullname}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{UsersData.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Role</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0 text-capitalize">{UsersData.role}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{UsersData.contact_number}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Website Markup</p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>One Page</p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    {/* <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Mobile Template</p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div className="progress-bar" role="progressbar" style=width: "55%" aria-valuenow="55"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Backend API</p>
                    <div className="progress rounded mb-2" style={{ height: 5 }}>
                      <div className="progress-bar" role="progressbar" style=width: "66%" aria-valuenow="66"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: ".77rem" }}>Web Design</p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    {/* <p className="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                    <div className="progress rounded" style="height: 5px;">
                      <div className="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                    <div className="progress rounded" style="height: 5px;">
                      <div className="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                    <div className="progress rounded" style="height: 5px;">
                      <div className="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                    <div className="progress rounded mb-2" style="height: 5px;">
                      <div className="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CommonModal
            show={updateProfileModal}
            handleClose={() => setUpdateProfileModal(false)}
            title={'Edit Profile'}
            size="lg"
            buttons={[
              {
                label: "Save Changes",
                color: "info",
                onClick: updatedAdminDetails
              }
            ]}
          >
            <form onSubmit={updatedAdminDetails} >
              <div className="form-group row">
                <div className="col-sm-6 mb-3">
                  <FormLabelModule cn="form-label " title="First Name" />
                  <FormInputModule typ="text" cn="form-control form-control-lg" val={first_name} onChange={e => setFirstname(e.target.value)} />
                </div>
                <div className="col-sm-6 mb-3 ">
                  <FormLabelModule cn="form-label " title="Last Name" />
                  <FormInputModule typ="text" cn="form-control form-control-lg" val={last_name} onChange={e => setLastname(e.target.value)} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-6 mb-3">
                  <FormLabelModule cn="form-label " title="Profile Image" />
                  <FormInputModule typ="file" cn="form-control form-control-lg" onChange={handleProfileImage} />
                </div>
                <div className="col-sm-6 mb-3 ">
                  <FormLabelModule cn="form-label " title="Contact Number" />
                  <FormInputModule typ="text" cn="form-control form-control-lg" val={contact_number} onChange={e => setContact_number(e.target.value)} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-12 mb-3">
                  <FormLabelModule cn="form-label " title="Email" />
                  <FormInputModule typ="email" cn="form-control form-control-lg" val={email} onChange={e => setEmail(e.target.value)} disabled="true" />
                </div>
              </div>

            </form>
          </CommonModal>
        </div>
      </div>

    </Layout>
  )
}

export default Profile