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
            
            return {
                
            }
        }

        case "CHECKOUT_CACHE": {
            
            return {
                
            }
        }
        
        case "CHECKOUT_BTN": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        default: {
            return state;
        }
    }
    return state;
};