import axios from '../../helper/axios';
import { productConstants } from './constants';

// ---------------Add Product----------------?
export const addProduct = (formData) => {
    return async (dispatch) => {
        dispatch({
            type: productConstants.ADD_PRODUCT_FAILURE
        });
        await axios.post('/product/create-product', formData).then(function (response) {
            console.log('res', response);
            // dispatch({
            //   type: productConstants.ADD_PRODUCT_SUCCESS,
            //   payload: {
            //     message: response.data.message
            //   }
            // })
        }).catch(function (error) {
            dispatch({
                type: productConstants.ADD_PRODUCT_FAILURE,
                payload: {
                    error: error.response.data.error,
                }
            })
        });
    }
}