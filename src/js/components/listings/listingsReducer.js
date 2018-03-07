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
            
            return {
                
            }
        }

        case "LISTINGS_CACHE": {
            
            return {
                
            }
        }
        
        case "LISTINGS_BTN": {
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