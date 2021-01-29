import {REDUX_CONSTANTS} from "utilities/constant";
import {synchronousDispatcher} from "../rootActions";

export const changeTheme = (payload) => synchronousDispatcher(REDUX_CONSTANTS.CHANGE_THEME, payload);