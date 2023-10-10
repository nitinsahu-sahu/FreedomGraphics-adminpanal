import { authConstants } from '../action/constants'

const initialState = {
    loading: false,
    error: null,
    message: ''
};


const CA = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.NEW_ADMIN_USER_REQUEST:
            state = {
                ...state,
                loading: false,
            }
            break;
        case authConstants.NEW_ADMIN_USER_SUCCESS:
            state = {
                ...state,
                message: action.payload.message,
                loading: true,
            }
            break;
        case authConstants.NEW_ADMIN_USER_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            }
            break;
        default: state = {
            ...state,
        }
    }
    return state
}
export default CA;
