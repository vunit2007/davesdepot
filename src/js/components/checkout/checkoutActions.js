import axios from "axios";

export function checkout(input) {
    
    return {
        type: "CHECKOUT",
        payload: {input}
    }
}

export const checkoutBtn = (input) => {

    return {
        type: "CHECKOUT_BTN",
        payload: {input}
    }
}

export const checkoutCache = (obj) => {

    return {
        type: "CHECKOUT_CACHE",
        payload: obj
    }
}