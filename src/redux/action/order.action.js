import { orderConstants } from "./constants";
import axios from "../../helper/axios";

export const getOrders = () => {
    return async (dispatch) => {
        dispatch({
            type: orderConstants.GET_USER_ORDER_REQUEST
        });
        await axios.post(`/admin/getOrders`).then((response) => {
            dispatch({
                type: orderConstants.GET_USER_ORDER_SUCCESS,
                payload: {
                    orders: response.data.orders,
                    message: response.data.message
                },
            });
        }).catch((error) => {
            dispatch({
                type: orderConstants.GET_USER_ORDER_FAILURE,
                payload: {
                    error: error.response.data.error
                },
            });
        })
    };
};

export const updateOrder = (payload) => {
    return async (dispatch) => {
        dispatch({ type: orderConstants.ORDER_TRACKER_REQUEST });
        await axios.post("/admin/updateOrdersStatus", payload).then((response) => {
            dispatch({ type: orderConstants.ORDER_TRACKER_SUCCESS });
            dispatch(getOrders());
        }).catch((error) => {
            dispatch({
                type: orderConstants.ORDER_TRACKER_FAILURE,
                payload: { error },
            });
        })
    };
};