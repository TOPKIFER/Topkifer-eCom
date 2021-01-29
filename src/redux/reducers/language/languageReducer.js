import {DEFAULT_LANGUAGE, REDUX_CONSTANTS} from "../../../utilities/constant";

const initialState = {
    actualLanguage: DEFAULT_LANGUAGE
}

const languageReducer = (state = initialState, actions) => {
    const {type, payload} = actions;
    switch (type) {
        case REDUX_CONSTANTS.CHANGE_LANGUAGE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

export default languageReducer