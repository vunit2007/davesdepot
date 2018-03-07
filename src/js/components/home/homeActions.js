import axios from "axios";

export function home(input) {

    return {
        type: "HOME",
        payload: {input}
    }
}

export const homeBtn = (input) => {

    return {
        type: "HOME_BTN",
        payload: {input}
    }
}

export const homeCache = (obj) => {
    
    return {
        type: "HOME_CACHE",
        payload: obj
    }
}