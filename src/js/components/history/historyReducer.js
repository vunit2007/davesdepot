const defaultState = {
    orders: null,
    statusPurchase: null,
    statusListings: null,
    sellerItems: null
};

export default function historyReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case "GET_ORDER_HISTORY_PENDING" : {
            return {
                ...state,
                statusPurchase: 'loading...'
            }
        }
        
        case "GET_ORDER_HISTORY_FULFILLED": {
            let orders = null;
            if (payload.length > 0){
                orders = payload[0]._listings;
            }
            return {
                ...state,
                orders,
                statusPurchase: null
            }
        }

        case "GET_ORDER_HISTORY_FAILED" : {
            return {
                ...state,
                statusPurchase: 'Failed'
            }
        }

        case "GET_SELLER_ITEMS_FULFILLED": {

            return {
                ...state,
                sellerItems: payload,
                statusListings: null
            }
        }

        case "GET_SELLER_ITEMS_PENDING": {
            return {
                ...state,
                statusListings: "loading..."
            }
        }

        case "GET_SELLER_ITEMS_FAILED": {
            return {
                ...state,
                statusListings: "Failed"
            }
        }

        default: {
            return state;
        }
    }
    return state;
};