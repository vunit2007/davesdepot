const defaultState = {
    listings: [],
    category: null,
    redirect: false
};

export default function listingsReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case "UPDATE_LISTINGS_FULFILLED": {

            return {
                ...state,
                listings: payload
            }
        }

        case "CATEGORY_UPDATE": {

            return {
             ...state,
             category: payload
            }
        }

        case "LISTING_REDIRECT_TRUE": {

            return {
                ...state,
                redirect: payload
            }
        }

        case "LISTING_REDIRECT_FALSE": {

            return {
                ...state,
                redirect: payload
            }
        }

        default: {
            return state;
        }
    }
    return state;
};

