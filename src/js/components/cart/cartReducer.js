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
            
            return {
                
            }
        }

        case "CART_CACHE": {
            
            return {
                
            }
        }
        
        case "CART_BTN": {
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