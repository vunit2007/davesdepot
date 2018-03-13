const defaultState = {
   
    listings: {}
    
};

export default function cartReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "REMOVE_BUTTON": {
            const {index} = actions.payload;
            console.log(index)
            const lineItems = [...state.lineItems];
            lineItems.splice(index,1);
            return {
                ...state,
                lineItems
            }
        }


        default: {
            return state;
        }
    }
    return state;
};