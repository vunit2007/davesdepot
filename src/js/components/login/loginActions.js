import axios from "axios";

export function login(input) {
    return {
        type: "LOGIN",
        payload: axios.get("/api/users")
        .then(res => res.data)
    }
}


export function inputChange(obj){
    return{
        type:"LOGIN_INPUT_CHANGE",
        payload:obj
    }
}