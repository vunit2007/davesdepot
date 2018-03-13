import axios from "axios";

export function removeButton(){
    return{
        type:"REMOVE_BUTTON",
        payload:{index}
    }
}