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
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "SELLER_CACHE": {
            
            return {
                
            }
        }
        
        case "SELLER_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};