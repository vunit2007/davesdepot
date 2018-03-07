const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function navbarReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "NAVBAR": {
            
            return {
                
            }
        }

        case "NAVBAR_CACHE": {
            
            return {
                
            }
        }
        
        case "NAVBAR_BTN": {
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