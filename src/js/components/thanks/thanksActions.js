import axios from "axios";

export function thanks(input) {
    
    return {
        type: "THANKS",
        payload: {input}
    }
}

export const thanksBtn = (input) => {

    return {
        type: "THANKS_BTN",
        payload: {input}
    }
}

export const thanksCache = (obj) => {

    return {
        type: "THANKS_CACHE",
        payload: obj
    }
}