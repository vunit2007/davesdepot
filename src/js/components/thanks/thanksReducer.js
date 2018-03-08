const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function thanksReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "THANKS": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "THANKS_CACHE": {
            
            return {
                
            }
        }
        
        case "THANKS_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};