import {REDUX_CONSTANTS} from "utilities/constant";

const {LOGIN} = REDUX_CONSTANTS;

const initialLoginState = {
    loggedInUser: {},
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
        default:
            return state
    }
}

export default loginReducer