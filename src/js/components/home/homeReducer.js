const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function homeReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "HOME": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "HOME_CACHE": {
            
            return {
                
            }
        }
        
        case "HOME_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};