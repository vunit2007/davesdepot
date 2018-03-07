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
            
            return {
                
            }
        }

        case "ADDLISTING_CACHE": {
            
            return {
                
            }
        }
        
        case "ADDLISTING_BTN": {
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