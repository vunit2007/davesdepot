import axios from "axios";

export function removeButton(index){
    return{
        type:"REMOVE_BUTTON",
        payload: index
    }
}

export function addToCart(obj){
    return {
        type: "ADD_TO_CART",
        payload: obj
    }
}

export function resetCart(){
    return {
        type: "RESET_CART",
        payload: []
    }
}

