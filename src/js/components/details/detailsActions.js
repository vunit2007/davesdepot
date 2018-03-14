import axios from "axios";

export function getDetails(id) {
    
    return {
        type: "GET_DETAILS",
        payload: axios.get(`api/listings/${id}`).then(res => res.data)
    }
}

export function setListingId(index) {
    
    return {
        type: "SET_LISTING_ID",
        payload: index
    }
}

export function updateQuantity(quantity) {
    
    return {
        type: "UPDATE_QUANTITY",
        payload: quantity
    }
}