const defaultState = {
    itemDetails: {},
    index: null
};

export default function detailsReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "GET_DETAILS_FULFILLED": {

            return {
                ...state,
                itemDetails: payload[0]
            }
        }

        case "SET_LISTING_ID": {
            console.log("first details: ", payload)
            return {
                ...state,
                index: payload,
            }
        }

        default: {
            return state;
        }
    }
    return state;
};