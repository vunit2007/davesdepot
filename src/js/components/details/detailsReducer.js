const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function detailsReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "DETAILS": {
            
            return {
                
            }
        }

        case "DETAILS_CACHE": {
            
            return {
                
            }
        }
        
        case "DETAILS_BTN": {
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