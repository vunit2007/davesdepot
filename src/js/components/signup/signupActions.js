import axios from "axios";


export function signUp(data) {
    console.log("data: ", data);
    return {
        type: 'SIGN_UP',
        payload: axios.post("/api/users", data).then(result => result.data)
    }
}


export function inputChange(obj){
    return{
        type:"SIGNUP_INPUT_CHANGE",
        payload:obj
    }
}
   
