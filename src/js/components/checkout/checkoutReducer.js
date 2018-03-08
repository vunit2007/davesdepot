const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function checkoutReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "CHECKOUT": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "CHECKOUT_CACHE": {
            
            return {
                
            }
        }
        
        case "CHECKOUT_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};