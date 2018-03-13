import axios from "axios";

export function addListing(input) {

    return {
        type: "ADDLISTING",
        payload: {input}
    }
}

export const addListingBtn = (input) => {

    return {
        type: "ADDLISTING_BTN",
        payload: {input}
    }
}

export const addListingCache = (obj) => {

    return {
        type: "ADDLISTING_CACHE",
        payload: obj
    }
}

export const toggleDropdown = () => {
    return {
        type: 'TOGGLE_DROPDOWN'
    }
}

export const radioSale = () => {
    return {
        type: 'RADIO_SALE'
    }
}

export function updateProductName(productname) {
  return {
    type: 'UPDATE_PRODUCT_NAME',
    payload: { productname }
  };
}

export function updateDescription(description) {
  return {
    type: 'UPDATE_DESCRIPTION',
    payload: { description }
  };
}

export function updatePrice(price) {
   return {
       type: 'UPDATE_PRICE',
       payload: { price }
   };
}

export function updateCondition(condition) {
    return {
        type: 'UPDATE_CONDITION',
        payload: { condition }
    };
}

export function updateUrl(url) {
    return {
        type: 'UPDATE_URL',
        payload: { url }
    }
}

export function updatePost(userId, obj) {
  return {
    type: 'UPDATE_POST',
    payload: axios.post(`/api/users/${userId}/listing`, obj)
    .then(response => response.data)

  };
}

