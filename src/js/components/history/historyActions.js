import axios from 'axios';

export function getOrderHistory(user) {
    return {
        type: 'GET_ORDER_HISTORY',
        payload: axios.get(`/api/users/${user.id}/orders`).then(r => r.data)
    }
}

export function getSellerItems(user) {
    return {
        type: "GET_SELLER_ITEMS",
        payload: axios.get(`/api/users/${user.id}/listing`).then(res => res.data)
    }
}

