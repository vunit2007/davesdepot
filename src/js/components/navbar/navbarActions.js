import axios from "axios";

export function navbar(input) {
    
    return {
        type: "NAVBAR",
        payload: {input}
    }
}

export const navbarBtn = (input) => {

    return {
        type: "NAVBAR_BTN",
        payload: {input}
    }
}

export const navbarCache = (obj) => {

    return {
        type: "NAVBAR_CACHE",
        payload: obj
    }
}