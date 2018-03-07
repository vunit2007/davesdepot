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
            
            return {
                
            }
        }

        case "BUYER_CACHE": {
            
            return {
                
            }
        }
        
        case "BUYER_BTN": {
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