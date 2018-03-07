import axios from "axios";

export function login(input) {
    return {
        type: "LOGIN",
        payload: {input}
    }
}

export const loginBtn = (input) => {

    return {
        type: "LOGIN_BTN",
        payload: {input}
    }
}

export const loginCache = (obj) => {
    return {
        type: "LOGIN_CACHE",
        payload: obj
    }
}