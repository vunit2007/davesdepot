const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function addListingReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "ADDLISTING": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "ADDLISTING_CACHE": {
            
            return {
                
            }
        }
        
        case "ADDLISTING_BTN": {
            
            return {
                ...state
            }
        }

        default: {
            return state;
        }
    }
    return state;
};