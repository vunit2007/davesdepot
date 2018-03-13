const defaultState = {
    status: null,
    userType: null
};

export default function sellerReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        default: {
            return state;
        }
    }
    return state;
};