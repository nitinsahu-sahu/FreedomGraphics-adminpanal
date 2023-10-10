import { orderConstants } from "../action/constants";


const initState = {
    orders: [],
    message: "",
    error: null,
    ordersFetching: true,
};

const OR = (state = initState, action) => {
    switch (action.type) {
        case orderConstants.GET_USER_ORDER_REQUEST:
            state = {
                ...state,
                ordersFetching: true,
            };
            break;
        case orderConstants.GET_USER_ORDER_SUCCESS:
            state = {
                ...state,
                orders: action.payload.orders,
                message: action.payload.message,
                ordersFetching: false,
            };
            break;
        case orderConstants.GET_USER_ORDER_FAILURE:
            state = {
                ...state,
                ordersFetching: true,
                error: action.payload.error,
            };
            break;
        default: state = {
            ...state,
        }

    }
    return state;
};

export default OR