import axios from "axios";

export function login(input) {
    return {
        type: "LOGIN",
        payload: axios.post("/api/users/login", input)
        .then(res => res.data)
    }
}

export function inputChange(obj){
    return{
        type:"LOGIN_INPUT_CHANGE",
        payload:obj
    }
}

export function setNull(){
    return {
        type: "SET_NULL",
        payload: null
    }
}

export function loginSignUp(boolean){
    return {
        type: "LOGIN_SIGNUP",
        payload: !boolean
    }
}

export function signUp(data) {
    return {
        type: 'SIGN_UP',
        payload: axios.post("/api/users", data).then(result => result.data)
    }
}

export function setUserType(user) {
    return {
        type: 'SET_USER_TYPE',
        payload: axios.get(`/api/users/${user.id}`).then(res => res.data)
    }
}