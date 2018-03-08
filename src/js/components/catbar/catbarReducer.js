const defaultState = {
    input: "",
    cache: {},
    listings: {},
    history: []
};

export default function catbarReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "CATBAR": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "CATBAR_CACHE": {
            
            return {
                
            }
        }
        
        case "CATBAR_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};