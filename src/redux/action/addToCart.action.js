import { cartConstants } from "./constants";

export const addToCart = (_id, image, price, title, productDetails) => {
  
  return async (dispatch) => {
    dispatch({
      type: cartConstants.CART_ITEM_REQUEST
    });
    dispatch({
      type: cartConstants.CART_ITEM_SUCCESS,
      payload: {
        cart: [_id, image, price, title,productDetails]
      }
    });
    dispatch({
      type: cartConstants.CART_ITEM_FAILURE,
      payload: {
        error: "Api error",
      },
    });
  }
};