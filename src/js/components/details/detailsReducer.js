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
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "DETAILS_CACHE": {
            
            return {
                
            }
        }
        
        case "DETAILS_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};