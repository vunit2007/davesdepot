import axios from "axios";

export function listings(input) {
    
    return {
        type: "SIGNUP",
        payload: {input}
    }
}

export const listingsBtn = (input) => {

    return {
        type: "SIGNUP_BTN",
        payload: {input}
    }
}

export const listingsCache = (obj) => {

    return {
        type: "SIGNUP_CACHE",
        payload: obj
    }
}