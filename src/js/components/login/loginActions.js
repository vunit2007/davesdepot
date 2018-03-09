import axios from "axios";

export function login(input) {
    return {
        type: "LOGIN",
        payload: axios.get("/api/users",data)
        .then(res => res.data)
    }
}

export const loginBtn = (input) => {

    return {
        type: "LOGIN_BTN",
        payload: {input}
    }
}

export function signOut(value) {
    return {
        type:"UPDATE_LOGOUT",
        payload: value
    }
}
