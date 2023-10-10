import { statusConstants } from './constants'
import { allUsersInfo } from './getData.action';
import axios from "axios";
import { getAllProduct } from './product.action';

// ---------------------------Maintain Product is_delete status-------------------------------
export const maintainProductIsDeleteStatus = (_id, current_status) => {
  return async (dispatch) => {
    dispatch({
      type: statusConstants.DELETE_PRODUCT_REQUEST,
    });
    await axios.post(`/product/softdelete`, {
      _id, current_status
    }).then(function (response) {
      dispatch({
        type: statusConstants.DELETE_PRODUCT_SUCCESS,
        message: response.data.message
      })
      dispatch(getAllProduct())
    }).catch(function (error) {
      dispatch({
        type: statusConstants.DELETE_PRODUCT_FAILURE,
        error: error.response.data.errors,
      })
    });
  }
}
// ---------------------------maintain status-------------------------------
export const maintainProductStatus = (_id, current_status) => {
  return async (dispatch) => {
    dispatch({
      type: statusConstants.PRODUCT_STATUS_REQUEST,
    });
    await axios.post(`/product/status`, {
      _id, current_status
    }).then(function (response) {
      dispatch({
        type: statusConstants.PRODUCT_STATUS_SUCCESS,
        message: response.data.message
      })
      dispatch(getAllProduct())
    }).catch(function (error) {
      dispatch({
        type: statusConstants.PRODUCT_STATUS_FAILURE,
        error: error.response.data.errors,
      })
    });
  }
}
// ---------------------------maintain status-------------------------------
export const maintainStatus = (_id, current_status) => {
  return async (dispatch) => {
    dispatch({
      type: statusConstants.STATUS_REQUEST,
    });
    await axios.post(`/admin/status`, {
      _id, current_status
    }).then(function (response) {
      dispatch({
        type: statusConstants.STATUS_SUCCESS,
        message: response.data.message
      })
      dispatch(allUsersInfo())
    }).catch(function (error) {
      dispatch({
        type: statusConstants.STATUS_FAILURE,
        error: error.response.data.errors,
      })
    });
  }
}

// ---------------------------Maintain is_delete status-------------------------------
export const maintainIsDeleteStatus = (_id, current_status) => {
  return async (dispatch) => {
    dispatch({
      type: statusConstants.DELETE_USER_REQUEST,
    });
    await axios.post(`/admin/softdelete`, {
      _id, current_status
    }).then(function (response) {
      dispatch({
        type: statusConstants.DELETE_USER_SUCCESS,
        message: response.data.message
      })
      dispatch(allUsersInfo())
    }).catch(function (error) {
      dispatch({
        type: statusConstants.DELETE_USER_FAILURE,
        error: error.response.data.errors,
      })
    });
  }
}