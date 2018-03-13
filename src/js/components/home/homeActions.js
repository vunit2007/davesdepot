import axios from "axios";

export function homeGetFeatured(input) {

    return {
        type: "HOME_GET_FEATURED",
        payload: axios.get("/api/listings").then(res => res.data)
    }
}

export function homeRedirectTrue(input) {

    return {
        type: "HOME_REDIRECT_TRUE",
        payload: true
    }
}

export function homeRedirectFalse(input) {

    return {
        type: "HOME_REDIRECT_FALSE",
        payload: false
    }
}
