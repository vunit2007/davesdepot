import axios from "axios";

export function seller(input) {
    return {
        type: "SELLER",
        payload: {input}
    }
}

export const sellerBtn = (input) => {

    return {
        type: "SELLER_BTN",
        payload: {input}
    }
}

export const sellerCache = (obj) => {
    return {
        type: "SELLER_CACHE",
        payload: obj
    }
}