import axios from "axios";
import { authConstants } from "./constants";

// Create Admin user
export const registerAdminUser = (adminData) => {
  let { email, first_name, last_name, role, password } = adminData
  return async (dispatch) => {
    dispatch({
      type: authConstants.NEW_ADMIN_USER_REQUEST
    });
    await axios.post(`/admin/create-user`, {
      email, 
      password, first_name, last_name, role
    }).then(function (response) {
      dispatch({
        type: authConstants.NEW_ADMIN_USER_SUCCESS,
        payload: {
          message: response.data.message
        }
      })
    }).catch(function (error) {
      dispatch({
        type: authConstants.NEW_ADMIN_USER_FAILURE,
        payload: {
          error: error.response.data.errors,
        }
      })
    });
  }
}