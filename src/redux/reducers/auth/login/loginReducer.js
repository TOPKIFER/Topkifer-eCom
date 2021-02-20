import {REDUX_CONSTANTS} from "utilities/constant";

const {LOGIN, ADD_TO_CART,UPDATE_CART} = REDUX_CONSTANTS;

const initialLoginState = {
    loggedInUser: {
        cart: []
    },
    isLoggedIn: false
}

const loginReducer = (state = initialLoginState, actions) => {
    const {type, payload} = actions;
    switch (type) {
        case LOGIN:
            return {
                ...state,
                ...payload
            }
        case ADD_TO_CART:
           // console.log(payload)
            let newCart = [...state.loggedInUser.cart];
            newCart.concat(payload);
            return {
                ...state,
                loggedInUser: {
                    ...state.loggedInUser,
                    cart: [...newCart]
                }
            }
        default:
            return state
    }
}

export default loginReducer