import { categoryConstants } from '../action/constants'

const initialState = {
  categories: [],
  error: null,
  loading: false,
  message:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        categories: action.payload.categories
      }
      break;
    case categoryConstants.UPDATE_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case categoryConstants.UPDATE_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        message:action.payload.message
      }
      break;
    case categoryConstants.UPDATE_CATEGORY_FAILURE:
      state = {
        ...initialState,
        error: action.payload.error
      }
      break;

    case categoryConstants.DELETE_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case categoryConstants.DELETE_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false
      }
      break;
    case categoryConstants.DELETE_CATEGORY_FAILURE:
      state = {
        ...initialState,
        error: action.payload.error,
        loading: true
      }
      break;
  }
  return state
}
