import {REDUX_CONSTANTS} from "../../../utilities/constant";
import {synchronousDispatcher} from "../rootActions";


export const changeCurrentLanguage = (payload) => synchronousDispatcher(REDUX_CONSTANTS.CHANGE_LANGUAGE, payload);