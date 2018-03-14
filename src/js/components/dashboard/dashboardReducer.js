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
                remove: "succeeded"
            }
        }

        case "REMOVE_LISTING_PENDING": {
            console.log("dashboardReducer RemovePending: ", payload);
            return {
                ...state,
                remove: "pending"
            }
        }

        case "REMOVE_LISTING_REJECTED": {
            console.log("dashboardReducer RemoveRejected: ", payload);
            return {
                ...state,
                remove: "failed"
            }
        }

        default: {
            return state;
        }
    }
    return state;
};