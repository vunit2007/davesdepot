const defaultState = {
    
};

export default function checkoutReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "CHECKOUT_FULFILLED": {
            let input = payload.input;
            return {
                ...state   
            }
        }

        default: {
            return state;
        }
    }
    return state;
};