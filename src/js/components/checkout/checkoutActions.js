import axios from "axios";

export function checkout(user, obj) {
    console.log("checkoutAction: ", user.id);
    return {
        type: "CHECKOUT",
        payload: axios.post(`/api/users/${user.id}/orders`, obj).then(res => res.data)
    }
}
