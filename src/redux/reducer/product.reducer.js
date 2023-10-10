import { productConstants } from '../action/constants'

const initialState = {
  products: [],
  productsByPrice: {
    under500: [],
    under5k: [],
    under10k: []
  },
  productDetails: {},
  loading: false,
  message: '',
  error: ''
};
const PR = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case productConstants.GET_ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
        loading: false,
        message: action.payload.message
      }
      break;
      case productConstants.GET_ALL_PRODUCT_FAILURE:
      state = {
        ...state,
        loading: true,
        error: action.payload.error
      }
      break;
    case productConstants.GET_PRODUCT_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
        productsByPrice: {
          ...action.payload.productsByPrice
        },
        loading: false,
        message: action.payload.message
      }
      break;
    case productConstants.GET_ALL_PRODUCT_FAILURE:
      state = {
        ...initialState
      }
      break;
    case productConstants.GET_PRODUCT_DETAIL_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_PRODUCT_DETAIL_BY_ID_SUCCESS:
      state = {
        ...state,
        productDetails: action.payload.productDetails,
        loading: false,
      };
      break;
    case productConstants.GET_PRODUCT_DETAIL_BY_ID_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
  }
  return state
}
export default PR;


// import { productConstants, getProductBySlugConstants } from '../action/constants'

// const initialState = {
//   products: [],
//   productsByPrice: {
//     under500: [],
//     under5k: [],
//     under10k: []
//   },
//   productDetails:{},
//   loading: false,
//   message: ''
// };
// export default (state = initialState, action) => {
//   switch (action.type) {
//
// }
