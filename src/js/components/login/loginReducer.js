const defaultState = {
    username:"",
    password:"",
    user: null,

};

export default function loginReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "LOGIN": {
            let input = payload.input;
            return {
                ...state,
                input
            }
        }



        
        case "LOGIN_CACHE": {
            
            return {
                
            }
        }
        
        case "LOGIN_BTN": {
            
            return {
                
            }
        }

        default: {
            return state;
        }
    }
    return state;
};




















// import { types } from '../actions/loginActions';

// const INITIAL_STATE = {
//     email: '',
//     password: '',
//     user: 'false',
//     activeUser: false,
//     activeCustomer: false,
//     currentUserId: '',
//     currentCustomerId: '',
//     authToken: ''
// };

// export default function LoginReducer(state = INITIAL_STATE, action) {
//     const { type, payload } = action;
//     switch (type) {
//         case types.LOGIN_USER: {
//             if (payload) {
//                 window.location.href= `https://herokuapp.com/#/user/${payload.userId}`;
//                 return {
//                     ...state,
//                     currentUserId: payload.userId,
//                     activeUser: true,
//                     authToken: payload.id
//                 };
//             } else {
//                 return {
//                     ...state,
//                     password: ''
//                 };
//             }
//         }
//         case types.LOGIN_CUSTOMER: {
//             if (payload) {
//                 // window.history.go(-1);
//                 window.location.href= ``;
//                 return {
//                     ...state,
//                     currentCustomerId: payload.userId,
//                     activeCustomer: true,
//                     authToken: payload.id
//                 }
//             } else {
//                 return {
//                     ...state,
//                     password: ''
//                 };
//             }
//         }

//         case (types.USER_TOGGLE_LOGIN): {
//             return {
//                 ...state,
//                 user: payload
//             };
//         }

//         case (types.UPDATE_USERNAME_LOGIN): {
//             return {
//                 ...state,
//                 email: payload
//             };
//         }

//         case (types.UPDATE_PASSWORD_LOGIN): {
//             return {
//                 ...state,
//                 password: payload
//             };
//         }
//         case (types.UPDATE_LOGOUT): {
//             return {
//                 ...state,
//                 activeUser: false,
//                 activeCustomer: false,
//                 currentUserId: '',
//                 currentCustomerId: ''
//             };
//         }
//         default: {
//             return state;
//         }
//     }
// };