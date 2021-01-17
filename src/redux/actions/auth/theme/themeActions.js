import {REDUX_CONSTANTS} from "utilities/constant";
import {synchronousDispatcher} from "../../rootActions";

const {CHANGE_THEME} = REDUX_CONSTANTS;

export const changeTheme = (payload) => synchronousDispatcher(CHANGE_THEME, payload);