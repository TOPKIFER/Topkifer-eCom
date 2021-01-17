import {REDUX_CONSTANTS} from "utilities/constant";
import {synchronousDispatcher} from "../../rootActions";

const {LOGIN} = REDUX_CONSTANTS;

export const logInTheUser = (payload) => synchronousDispatcher(LOGIN, payload);