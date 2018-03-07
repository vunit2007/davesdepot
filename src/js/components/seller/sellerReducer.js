const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function sellerReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "SELLER": {
            
            return {
                
            }
        }

        case "SELLER_CACHE": {
            
            return {
                
            }
        }
        
        case "SELLER_BTN": {
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