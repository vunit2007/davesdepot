import axios from 'axios';

export function getOrderHistory(userId) {
    return {
        type: 'GET_ORDER_HISTORY',
        payload: axios.get(`/api/users/${userId}/orders`).then(r => r.data)
    }
}