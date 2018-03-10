const defaultState = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    userType: "buyer",
    address:"",
    username:"",
    redirect: false,
    error: false
};

export default function signupReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {


        case "SIGNUP_INPUT_CHANGE":{         
          return{
                ...state, 
                ...payload
                
            }
            
        }

        case 'SIGN_UP_FULFILLED': {
            return {
                ...state,
                user: payload,
                error: false,
                redirect: true
            }
        }
        case "SIGN_UP_REJECTED":{
            console.log("rejected payload", payload)

            var error = state.error;

            return{
                ...state,
                error
            }
        }

        default: {
            return state;
        }
    }
    return state;
};

