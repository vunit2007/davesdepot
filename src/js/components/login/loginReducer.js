const defaultState = {
    userType:"buyer",
    email: null,
    password: null,
    username: null,
    name: null,
    phoneNumber: null,
    address: null,
    redirect: false,
    error: false,
    user: {id: "5aa311e7d46de5ee2046a1b1"},
    loginSignUpBoolean: true,
    completeFirstAxios: false

};

export default function loginReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case "LOGIN_INPUT_CHANGE":{
          return{
                ...state,
                ...payload

            }

        }

        case "LOGIN_FULFILLED": {

            return {
                ...state,
                user: {id: payload.userId},
                error: false,
                completeFirstAxios: true
            }
        }

        case "LOGIN_REJECTED":{

            var error = state.error;

            return{
                ...state,
                error
            }
        }

        case "SET_NULL": {
            return{
                ...state,
                user: null,
                redirect: false,
                loginSignUpBoolean: true
            }
        }

        case "LOGIN_SIGNUP": {
            return {
                ...state,
                loginSignUpBoolean: payload
            }
        }

        case 'SIGN_UP_FULFILLED': {

            return {
                ...state,
                user: {id: payload.id},
                error: false,
                completeFirstAxios: true
            }
        }
        case "SIGN_UP_REJECTED":{

            var error = state.error;

            return{
                ...state,
                error
            }
        }

        case "SET_USER_TYPE_PENDING" : {
            return {
                ...state,
                status: 'loading...'
            }
        }

        case "SET_USER_TYPE_FULFILLED": {

            return {
                ...state,
                user: payload,
                status: null,
                redirect: true,
                completeFirstAxios: false
            }
        }

        case "SET_USER_TYPE_REJECTED" : {
            return {
                ...state,
                status: 'Failed'
            }
        }

        default: {
            return state;
        }
    }
    return state;
};
