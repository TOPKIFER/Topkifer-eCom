import {BLACK, REDUX_CONSTANTS} from "utilities/constant";

const {CHANGE_THEME} = REDUX_CONSTANTS;

const initialThemeState = {
    actualTheme: BLACK
}

const themeReducer = (state = initialThemeState, actions) => {
    const {type, payload} = actions;
    switch (type) {
        case CHANGE_THEME:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

export default themeReducer