import axios from "axios";

export function buyer(input) {
    
    return {
        type: "BUYER",
        payload: {input}
    }
}

export const buyerBtn = (input) => {

    return {
        type: "BUYER_BTN",
        payload: {input}
    }
}

export const buyerCache = (obj) => {

    return {
        type: "BUYER_CACHE",
        payload: obj
    }
}