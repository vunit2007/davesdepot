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
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "NAVBAR_CACHE": {
            
            return {
                
            }
        }
        
        case "NAVBAR_BTN": {

            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};