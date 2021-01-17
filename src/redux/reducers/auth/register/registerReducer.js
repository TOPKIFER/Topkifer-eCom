import {REDUX_CONSTANTS} from "utilities/constant";

const {REGISTER} = REDUX_CONSTANTS;

const initialRegisterState = {
    loggedInUser: {},
    isLoggedIn: false
}

const registerReducer = (state = initialRegisterState, actions) => {
    const {type, payload} = actions;
    switch (type) {
        case REGISTER:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

export default registerReducer