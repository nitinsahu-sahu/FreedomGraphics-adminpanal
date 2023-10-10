import axios from "../../helper/axios";

import { authConstants } from "./constants";

// Admin login
export const adminLogin = (admin_Login_Data) => {
  let { email, password } = admin_Login_Data
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST
    });
    await axios.post(`/admin/signin`, {
      email,
      password
    }).then(function (response) {
      const token = response.data.token;
      const user = response.data.data;
      localStorage.setItem('admin_token', token);
      localStorage.setItem('admin_user', JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
          message: response.data.message
        }
      })
    }).catch(function (error) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: error.response.data.errors,
        }
      })
    });
  }
}

//Admin Signout 
export const signout = () => {
  return async dispatch => {
    dispatch({
      type: authConstants.LOGOUT_REQUEST
    });
    await axios.post(`/admin/signout`).then((response) => {
      localStorage.clear()
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
        payload: {
          message: response.data.message
        }
      })
      dispatch(isUserLoggedIn())
    }).catch((error) => {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {
          error: error.data.error
        }
      });
    })
  }
}

// Checking admin login or not
export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('admin_user'));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user
        }
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          message: 'Failed to login!!!'
        }
      })
    }
  }
}



export const getProfileData = () => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.GET_PROFILE_REQUEST
    });
    await axios.get(`/admin/getProfile`).then(function (response) {
      dispatch({
        type: authConstants.GET_PROFILE_SUCCESS,
        payload: {
          user: response.data.data,
          message: response.data.message
        }
      })
    }).catch(function (error) {
      dispatch({
        type: authConstants.GET_PROFILE_FAILURE,
        payload: {
          error: error.data.errors,
        }
      })
    });
  }
}



export const updateAdminUser = (formData) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.UPDATE_USER_REQUEST
    });
    await axios.post(`/admin/editprofile`, formData).then((response) => {
      const user = response.data.data;
      localStorage.setItem('admin_user', JSON.stringify(user));
      dispatch({
        type: authConstants.UPDATE_USER_SUCCESS,
        payload: {
          user,
          message: response.data.message
        }
      })
      dispatch(getProfileData())
    }).catch((error) => {
      dispatch({
        type: authConstants.UPDATE_USER_FAILURE,
        payload: {
          error: error.response.data.errors,
        }
      })
    });
  }
}

