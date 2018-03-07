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
            
            return {
                
            }
        }

        case "THANKS_CACHE": {
            
            return {
                
            }
        }
        
        case "THANKS_BTN": {
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