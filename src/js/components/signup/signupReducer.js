const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function signupReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "SIGNUP": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "SIGNUP_CACHE": {
            
            return {
                
            }
        }
        
        case "SIGNUP_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};