const defaultState = {
    input: "",
    dropdownOpen: false,
    cache: {},
    listings: {},
    history: [],
    rSelected: false,
    productname: '',
    description: '',
    price: '',
    condition: '',
    url: '',
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

    case 'UPDATE_URL': {
        return {
            ...state,
            url: payload.url
        };
    }

    case 'UPDATE_POST_FULFILLED': {
      const { productname, description, price, url } = action.payload;
      return {
        ...state,


      };
    }


        default: {
            return state;
        }
    }
    return state;
};