import axios from "axios";

export function cart(input) {
    
    return {
        type: "CART",
        payload: {input}
    }
}

export const cartBtn = (input) => {

    return {
        type: "CART_BTN",
        payload: {input}
    }
}

export const cartCache = (obj) => {

    return {
        type: "CART_CACHE",
        payload: obj
    }
}