import { productConstants } from './constants'
import axios from '../../helper/axios';



// ------------------------
export const getProductDetailsById = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_PRODUCT_DETAIL_BY_ID_REQUEST
    });
    const productByIdRes = await axios.get(`http://localhost:8000/api/product/${payload.params.productId}`);
    if (productByIdRes.status === 200) {
      dispatch({
        type: productConstants.GET_PRODUCT_DETAIL_BY_ID_SUCCESS,
        payload: {
          productDetails: productByIdRes.data.product
        }
      });
      // dispatch(getProducts());
    } else {
      dispatch({
        type: productConstants.GET_PRODUCT_DETAIL_BY_ID_FAILURE,
        payload: {
          error: "Api error",
        },
      });
    }
  };
};

// -------------------------------------
export const getAllProduct = () => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_ALL_PRODUCT_REQUEST,
    });
    await axios.get("/product/get-products").then(function (response) {
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_SUCCESS,
        payload: {
          products:response.data.findAllProduct,
          message:response.data.message
        }
      })
    }).catch(function (error) {
      dispatch({
        type: productConstants.GET_ALL_PRODUCT_FAILURE,
        payload: error.data.error,
      })
    })
  };
}


