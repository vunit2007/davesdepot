const defaultState = {
    status: null,
    userType: null,
    remove: null
};

export default function sellerReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case "REMOVE_LISTING_FULFILLED": {
            console.log("dashboardReducer RemoveFulfilled: ", payload);
            return {
                ...state,
                remove: "fulfilled"
            }
        }

        case "REMOVE_LISTING_PENDING": {
            console.log("dashboardReducer RemovePending: ", payload);
            return {
                ...state,
                remove: "pending"
            }
        }

        default: {
            return state;
        }
    }
    return state;
};