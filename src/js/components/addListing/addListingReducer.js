const defaultState = {
    input: "",
    dropdownOpen: false,
    dropdownOpenTwo: false,
    dropdownOpenThree: false,
    cache: {},
    listings: {},
    history: [],
    rSelected: false,
    productname: '',
    description: '',
    price: 0,
    condition: '',
    categories: '',
    specials: '',
    url: '',
    posted: false,
    postedItem: null,
};

export default function addListingReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case "ADDLISTING": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }

        case "ADDLISTING_CACHE": {

            return {

            }
        }

        case "ADDLISTING_BTN": {

            return {
                ...state
            }
        }

        case 'TOGGLE_DROPDOWN': {
            return {
                ...state,
                dropdownOpen: !state.dropdownOpen
            }
        }

        case 'TOGGLE_DROPDOWN_TWO': {
            return {
                ...state,
                dropdownOpenTwo: !state.dropdownOpenTwo
            }
        }

        case 'TOGGLE_DROPDOWN_THREE': {
            return {
                ...state,
                dropdownOpenThree: !state.dropdownOpenThree
            }
        }

        case "RADIO_SALE": {

                        return {
                            ...state,
                            rSelected: !rSelected
                        }
                    }

       case 'UPDATE_PRODUCT_NAME': {

      return {

        ...state,

        productname: payload.productname
      };
    }

    case 'UPDATE_DESCRIPTION': {

      return {

        ...state,

        description: payload.description
      };
    }

    case 'UPDATE_PRICE': {
        return {
            ...state,
            price: payload.price
        };
    }

    case 'UPDATE_CONDITION': {
        return {
            ...state,
            condition: payload.condition
        };
    }

    case 'UPDATE_CATEGORIES': {
        return {
            ...state,
            categories: payload.categories
        };
    }

    case 'UPDATE_SPECIALS': {
        return {
            ...state,
            specials: payload.specials
        };
    }

    case 'UPDATE_URL': {
        return {
            ...state,
            url: payload.url
        };
    }

    case 'UPDATE_POST_TRUE': {
        return {
            ...state,
            posted: payload
        }
    }

    case 'UPDATE_POST_FALSE': {
        return {
            ...state,
            posted: payload
        }
    }

    case 'UPDATE_POST_FULFILLED': {
    console.log( 'PAYLOADDD', payload)

      return {
        ...state,

          postedItem: payload,
          posted: true

      };
    }


        default: {
            return state;
        }
    }
    return state;
};