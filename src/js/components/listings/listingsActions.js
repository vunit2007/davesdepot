import axios from "axios";

export function updateListing(listingsitem) {
    const payload = axios.get(`/api/listings`).then(res => res.data);
    return {
        type: 'UPDATE_LISTINGS',
        payload
    };
}

export const categoryUpdate = (category) => {

    return {
        type: "CATEGORY_UPDATE",
        payload: category
    }
}

export function listingRedirectTrue(input) {

    return {
        type: "LISTING_REDIRECT_TRUE",
        payload: true
    }
}

export function listingRedirectFalse(input) {

    return {
        type: "LISTING_REDIRECT_FALSE",
        payload: false
    }
}