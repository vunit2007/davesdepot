const defaultState = {
    listings: [],
    listingId: null,
    redirect: false
};

export default function homeReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "HOME_GET_FEATURED_FULFILLED": {

            return {
                ...state,
                listings: payload
            }
        }

        case "HOME_REDIRECT_TRUE": {

            return {
                ...state,
                redirect: payload
            }
        }

        case "HOME_REDIRECT_FALSE": {

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