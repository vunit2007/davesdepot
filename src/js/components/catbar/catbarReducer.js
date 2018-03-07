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
            
            return {
                
            }
        }

        case "CATBAR_CACHE": {
            
            return {
                
            }
        }
        
        case "CATBAR_BTN": {
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