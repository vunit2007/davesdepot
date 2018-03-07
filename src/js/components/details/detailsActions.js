import axios from "axios";

export function details(input) {
    
    return {
        type: "DETAILS",
        payload: {input}
    }
}

export const detailsBtn = (input) => {

    return {
        type: "DETAILS_BTN",
        payload: {input}
    }
}

export const detailsCache = (obj) => {

    return {
        type: "DETAILS_CACHE",
        payload: obj
    }
}