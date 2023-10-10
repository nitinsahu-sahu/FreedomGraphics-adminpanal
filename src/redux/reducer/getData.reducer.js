import { gettingDataConstants } from '../action/constants'

const initialState = {
    fatchusers: [],
    loading: false,
    error: null,
    message: ''
};
const FD = (state = initialState, action) => {
    switch (action.type) {
        case gettingDataConstants.GET_USERS_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case gettingDataConstants.GET_USERS_SUCCESS:
            state = {
                ...state,
                fatchusers: action.payload.usersList,
                loading: false,
                message: action.payload.message
            }
            break;
        case gettingDataConstants.GET_USERS_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            }
            break;
    }
    return state
}
export default FD;
