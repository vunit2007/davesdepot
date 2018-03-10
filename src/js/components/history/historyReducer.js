const defaultState = {
    orders: null,
    status: null
};

export default function historyReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case "GET_ORDER_HISTORY_PENDING" : {
            return {
                ...state,
                status: 'loading'
            }
        }
        
        case "GET_ORDER_HISTORY_FULFILLED": {
            return {
                ...state,
                orders: payload,
                status: null
            }
        }

        default: {
            return state;
        }
    }
    return state;
};