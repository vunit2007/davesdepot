const defaultState = {
    listings: {},
    category: "sports",
};

export default function listingsReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case "UPDATE_LISTINGS_FULFILLED": {

            return {
                ...state,
                listings: payload.data
            }
        }



        case "CATEGORY_UPDATE": {

            return {
             ...state,
             category: payload
            }
        }

        default: {
            return state;
        }
    }
    return state;
};

