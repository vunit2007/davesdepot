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

export const toggleDropdownTwo = () => {
    return {
        type: 'TOGGLE_DROPDOWN_TWO'
    }
}

export const toggleDropdownThree = () => {
    return {
        type: 'TOGGLE_DROPDOWN_THREE'
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

export function updateSpecials(specials) {
    return {
        type: 'UPDATE_SPECIALS',
        payload: { specials }
    };
}

export function updateUrl(url) {
    return {
        type: 'UPDATE_URL',
        payload: { url }
    }
}

export function updateCategories(categories) {
    return {
        type: 'UPDATE_CATEGORIES',
        payload: {categories}
    }
}

export function updatePost(user, obj) {
  return {
    type: 'UPDATE_POST',
    payload: axios.post(`/api/users/${user.id}/listing`, obj)
    .then(response => response.data)

  };
}

export function updatePostedFalse(posted) {
    return {
        type: 'UPDATE_POST_FALSE',
        payload: false
    }
}

export function updatePostedTrue(posted) {
    return {
        type: 'UPDATE_POST_TRUE',
        payload: true
    }
}

