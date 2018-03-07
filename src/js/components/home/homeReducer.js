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
            
            return {
                
            }
        }

        case "HOME_CACHE": {
            
            return {
                
            }
        }
        
        case "HOME_BTN": {
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