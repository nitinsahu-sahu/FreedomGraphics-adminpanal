import { productConstants } from '../action/constants'

const initialState = {
    error: null,
    message: ''
};


const CP = (state = initialState, action) => {
    switch (action.type) {
        case productConstants.ADD_PRODUCT_REQUEST:
            state = {
                ...state,
            }
            break;
        case productConstants.ADD_PRODUCT_SUCCESS:
            state = {
                ...state,
                message: action.payload.message,
            }
            break;
        case productConstants.ADD_PRODUCT_FAILURE:
            state = {
                ...state,
                error: action.payload
            }
            break;
        default: state = {
            ...state,
        }
    }
    return state
}
export default CP;
