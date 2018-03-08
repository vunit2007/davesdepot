const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function listingsReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "LISTINGS": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "LISTINGS_CACHE": {
            
            return {
                
            }
        }
        
        case "LISTINGS_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};