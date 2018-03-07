import axios from "axios";

export function signup(input) {
    
    return {
        type: "SIGNUP",
        payload: {input}
    }
}

export const signupBtn = (input) => {

    return {
        type: "SIGNUP_BTN",
        payload: {input}
    }
}

export const signupCache = (obj) => {

    return {
        type: "SIGNUP_CACHE",
        payload: obj
    }
}