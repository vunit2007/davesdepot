const defaultState = {
    input: "",
    dropdownOpen: false,
    cache: {},
    listings: {},
    history: [],
    rSelected: false,
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

        default: {
            return state;
        }
    }
    return state;
};