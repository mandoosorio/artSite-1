import {
    SET_CURRENT_USER,
    USER_LOADING
} from "../actions/types";
// import { userConstants } from "../actions/types";
// import { isEmpty } from "is-empty";
const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

// export default function authentication(state = initialState, action) {
//     switch (action.type) {
//         case userConstants.LOGIN_REQUEST:
//             return {
//                 loggedIn: true,
//                 user: action.user
//             };
//             case userConstants.LOGIN_SUCCESS:
//                 return {
//                     loggedIn: true,
//                     user: action.user
//                 };
//                 case userConstants.LOGIN_FAILURE:
//                     return {};
//                     case userConstants.LOGOUT:
//                         return {};
//                         default:
//                             return state
//     }
// }

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
            case USER_LOADING: 
            return {
                ...state,
                loading: true
            };
            default:
                return state;
    }
}