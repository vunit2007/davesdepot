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

export const toggleDropdown = () => {
    return {
        type: 'TOGGLE_DROPDOWN'
    }
}

export const radioSale = () => {
    return {
        type: 'RADIO_SALE'
    }
}