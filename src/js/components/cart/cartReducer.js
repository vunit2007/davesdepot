const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function cartReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "CART": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "CART_CACHE": {
            
            return {
                
            }
        }
        
        case "CART_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};