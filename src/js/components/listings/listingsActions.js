import axios from "axios";

export function updateListing(listingsitem) {
    console.log("food", )
    const payload = axios.get(`http://localhost:3000/api/listings`)
    return {
        type: 'UPDATE_LISTINGS',
        payload
    };
}


export const categoryUpdate = (categorything) => {

    return {
        type: "CATEGORY_UPDATE",
        payload: categorything
    }
}

