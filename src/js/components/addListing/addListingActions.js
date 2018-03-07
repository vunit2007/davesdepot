import axios from "axios";

export function addListing(input) {
    
    return {
        type: "ADDLISTING",
        payload: {input}
    }
}

export const addListingBtn = (input) => {

    return {
        type: "ADDLISTING_BTN",
        payload: {input}
    }
}

export const addListingCache = (obj) => {

    return {
        type: "ADDLISTING_CACHE",
        payload: obj
    }
}