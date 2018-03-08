const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function loginReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "LOGIN": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "LOGIN_CACHE": {
            
            return {
                
            }
        }
        
        case "LOGIN_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};