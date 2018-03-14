import axios from "axios";

export function checkout(user, obj) {
    
    return {
        type: "CHECKOUT",
        payload: axios.post(`/user/${user.id}/orders`, obj).then(res => res.data)
    }
}
