export const authConstants = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',

  NEW_ADMIN_USER_REQUEST: 'NEW_ADMIN_USER_REQUEST',
  NEW_ADMIN_USER_FAILURE: 'NEW_ADMIN_USER_FAILURE',
  NEW_ADMIN_USER_SUCCESS: 'NEW_ADMIN_USER_SUCCESS',

  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',

  GET_PROFILE_REQUEST:'GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS:'GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILURE:'GET_PROFILE_FAILURE',

  FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILURE: 'FORGOT_PASSWORD_FAILURE',

  RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAILURE: 'RESET_PASSWORD_FAILURE',

  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',
}

export const statusConstants = {
  STATUS_REQUEST: 'STATUS_REQUEST',
  STATUS_SUCCESS: 'STATUS_SUCCESS',
  STATUS_FAILURE: 'STATUS_FAILURE',

  DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE: 'DELETE_USER_FAILURE',

  PRODUCT_STATUS_REQUEST: 'PRODUCT_STATUS_REQUEST',
  PRODUCT_STATUS_SUCCESS: 'PRODUCT_STATUS_SUCCESS',
  PRODUCT_STATUS_FAILURE: 'PRODUCT_STATUS_FAILURE',

  DELETE_PRODUCT_REQUEST: 'DELETE_PRODUCT_REQUEST',
  DELETE_PRODUCT_SUCCESS: 'DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_FAILURE: 'DELETE_PRODUCT_FAILURE',
}

export const gettingDataConstants = {
  GET_USERS_REQUEST: 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',
}

export const categoryConstants = {
  ADD_CATEGORY_REQUEST: 'ADD_CATEGORY_REQUEST',
  ADD_CATEGORY_SUCCESS: 'ADD_CATEGORY_SUCCESS',
  ADD_CATEGORY_FAILURE: 'ADD_CATEGORY_FAILURE',

  GET_ALL_CATEGORY_REQUEST: 'GET_ALL_CATEGORY_REQUEST',
  GET_ALL_CATEGORY_SUCCESS: 'GET_ALL_CATEGORY_SUCCESS',
  GET_ALL_CATEGORY_FAILURE: 'GET_ALL_CATEGORY_FAILURE',

  UPDATE_CATEGORY_REQUEST: 'UPDATE_CATEGORY_REQUEST',
  UPDATE_CATEGORY_SUCCESS: 'UPDATE_CATEGORY_SUCCESS',
  UPDATE_CATEGORY_FAILURE: 'UPDATE_CATEGORY_FAILURE',

  DELETE_CATEGORY_REQUEST: 'DELETE_CATEGORY_REQUEST',
  DELETE_CATEGORY_SUCCESS: 'DELETE_CATEGORY_SUCCESS',
  DELETE_CATEGORY_FAILURE: 'DELETE_CATEGORY_FAILURE'
}

export const cartConstants = {
  CART_ITEM_REQUEST: 'CART_ITEM_REQUEST',
  CART_ITEM_SUCCESS: 'CART_ITEM_SUCCESS',
  CART_ITEM_FAILURE: 'CART_ITEM_FAILURE',

  ADD_TO_CART_REQUEST: 'ADD_TO_CART_REQUEST',
  ADD_TO_CART_SUCCESS: 'ADD_TO_CART_SUCCESS',
  ADD_TO_CART_FAILURE: 'ADD_TO_CART_FAILURE',

  RESET_CART_SUCCESS: 'RESET_CART_SUCCESS'
}

export const productConstants = {
  GET_ALL_PRODUCT_REQUEST: 'GET_ALL_PRODUCT_REQUEST',
  GET_ALL_PRODUCT_SUCCESS: 'GET_ALL_PRODUCT_SUCCESS',
  GET_ALL_PRODUCT_FAILURE: 'GET_ALL_PRODUCT_FAILURE',

  ADD_PRODUCT_REQUEST: 'ADD_PRODUCT_REQUEST',
  ADD_PRODUCT_SUCCESS: 'ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_FAILURE: 'ADD_PRODUCT_FAILURE',
  // PRODUCT_FILTER_REQUEST: 'PRODUCT_FILTER_REQUEST',
  // PRODUCT_FILTER_SUCCESS: 'PRODUCT_FILTER_SUCCESS',
  // PRODUCT_FILTER_FAILURE: 'PRODUCT_FILTER_FAILURE',

  GET_PRODUCT_BY_SLUG: 'GET_PRODUCT_BY_SLUG',

  GET_PRODUCT_DETAIL_BY_ID_REQUEST: 'GET_PRODUCT_DETAIL_BY_ID_REQUEST',
  GET_PRODUCT_DETAIL_BY_ID_SUCCESS: 'GET_PRODUCT_DETAIL_BY_ID_SUCCESS',
  GET_PRODUCT_DETAIL_BY_ID_FAILURE: 'GET_PRODUCT_DETAIL_BY_ID_FAILURE'
}

export const addressConstants = {
  GET_USER_ADDRESS_REQUEST: 'GET_USER_ADDRESS_REQUEST',
  GET_USER_ADDRESS_SUCCESS: 'GET_USER_ADDRESS_SUCCESS',
  GET_USER_ADDRESS_FAILURE: 'GET_USER_ADDRESS_FAILURE',

  ADD_USER_ADDRESS_REQUEST: 'ADD_USER_ADDRESS_REQUEST',
  ADD_USER_ADDRESS_SUCCESS: 'ADD_USER_ADDRESS_SUCCESS',
  ADD_USER_ADDRESS_FAILURE: 'ADD_USER_ADDRESS_FAILURE',
}

export const orderConstants = {
  GET_USER_ORDER_REQUEST: 'GET_USER_ORDER_REQUEST',
  GET_USER_ORDER_SUCCESS: 'GET_USER_ORDER_SUCCESS',
  GET_USER_ORDER_FAILURE: 'GET_USER_ORDER_FAILURE',

  ORDER_TRACKER_REQUEST: 'ORDER_TRACKER_REQUEST',
  ORDER_TRACKER_SUCCESS: 'ORDER_TRACKER_SUCCESS',
  ORDER_TRACKER_FAILURE: 'ORDER_TRACKER_FAILURE',
}