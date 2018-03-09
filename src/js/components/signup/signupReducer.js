const defaultState = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    user: "false",
    address:"",
    user_type:"false",
    username:"",
    error: false
};

export default function signupReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {


        case "INPUT_CHANGE":{  
            console.log("payload: ", payload)        
          return{
                ...state, 
                ...payload
                
            }
            
        }

        case 'SIGN_UP_FULFILLED': {
            console.log("reducer: ", payload)
            return {
                ...state,
                user: payload,
                error: false
            }
        }
        case "SIGN_UP_REJECTED":{
            console.log("payload", payload)

            var error = state.error;

            if (payload.includes('email')) {
                error = 'email'
            }
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

