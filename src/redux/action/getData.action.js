import axios from "axios";
import { gettingDataConstants } from "./constants";

export const allUsersInfo = () => {
  return async (dispatch) => {
    dispatch({
      type: gettingDataConstants.GET_USERS_REQUEST
    });
    await axios.get(`/admin/findAllUsers`).then(function (response) {
      dispatch({
        type: gettingDataConstants.GET_USERS_SUCCESS,
        payload: {
          message: response.data.message,
          usersList: response.data.findAllUser
        }
      })
    }).catch(function (error) {
      dispatch({
        type: gettingDataConstants.GET_USERS_FAILURE,
        payload: {
          error: error.response.data.errors,
        }
      })
    });
  }
}


// --------------Get All Product API-------------
  // export const getAllUsers = () => {
  //   console.log("hi");
  //   return async (dispatch) => {
  //     dispatch({
  //       type: productConstants.GET_ALL_PRODUCT_REQUEST,
  //     });
  //     const productRes = await fetch('http://localhost:8000/api/admin/findAllUsers', {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //     });
  //     const productResData = await productRes.json();
  //     console.log(productRes);
  //     if (productRes.status === 201) {
  //       const { findAllCat, findAllProduct } = productResData;
  //       dispatch({
  //         type: productConstants.GET_ALL_PRODUCT_SUCCESS,
  //         payload: {
  //           message: productResData.message,
  //           findAllCat, findAllProduct
  //         }
  //       })
  //     } else {
  //       dispatch({
  //         type: productConstants.GET_ALL_PRODUCT_FAILURE,
  //         payload: {
  //           message: productResData.message,
  //         }
  //       })
  //     }
  //   }
  // }