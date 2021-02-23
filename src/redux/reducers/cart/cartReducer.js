import {REDUX_CONSTANTS, TOP} from "utilities/constant";

const initialState = {
    valuesCart: [],
    totals: {},
    quantities: {},
    coupon: {
        valid: false,
        value: "",
        isApplied: false
    },
    navigationPosition: TOP
}

const cartReducer = (state = initialState, actions) => {
    const {type, payload} = actions;
    switch (type) {
        case REDUX_CONSTANTS.CHANGE_CART:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

export default cartReducer