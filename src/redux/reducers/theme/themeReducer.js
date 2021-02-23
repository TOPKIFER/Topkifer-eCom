import {REDUX_CONSTANTS, WHITE} from "utilities/constant";

const {CHANGE_THEME} = REDUX_CONSTANTS;

const initialThemeState = {
    actualTheme: WHITE
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