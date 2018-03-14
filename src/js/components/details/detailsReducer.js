const defaultState = {
    itemDetails: {},
    index: null,
    quantity: 1
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

            return {
                ...state,
                index: payload,
            }
        }

        case "UPDATE_QUANTITY": {

            return {
                ...state,
                quantity: payload,
            }
        }

        default: {
            return state;
        }
    }
    return state;
};