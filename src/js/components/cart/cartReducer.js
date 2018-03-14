const defaultState = {
    cart: []
};

export default function cartReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "REMOVE_BUTTON": {
            console.log("cartReducer index: ",payload);
            let cart = [...state.cart];
            cart.splice(payload, 1);
            return {
                ...state,
                cart
            }
        }

        case "ADD_TO_CART": {
            
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        }

        default: {
            return state;
        }
    }
    return state;
};