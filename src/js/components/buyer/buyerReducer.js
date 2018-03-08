const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function buyerReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "BUYER": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "BUYER_CACHE": {
            
            return {
                
            }
        }
        
        case "BUYER_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};