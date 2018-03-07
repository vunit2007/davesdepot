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
            
            return {
                
            }
        }

        case "LOGIN_CACHE": {
            
            return {
                
            }
        }
        
        case "LOGIN_BTN": {
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