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
            
            return {
                
            }
        }

        case "SIGNUP_CACHE": {
            
            return {
                
            }
        }
        
        case "SIGNUP_BTN": {
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