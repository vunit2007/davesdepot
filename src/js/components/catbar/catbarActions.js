import axios from "axios";

export function catbar(input) {
    
    return {
        type: "CATBAR",
        payload: {input}
    }
}

export const catbarBtn = (input) => {

    return {
        type: "CATBAR_BTN",
        payload: {input}
    }
}

export const catbarCache = (obj) => {

    return {
        type: "CATBAR_CACHE",
        payload: obj
    }
}