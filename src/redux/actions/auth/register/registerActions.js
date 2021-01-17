import {REDUX_CONSTANTS} from "utilities/constant";
import {synchronousDispatcher} from "../../rootActions";

const {REGISTER} = REDUX_CONSTANTS;

export const registerTheUser = (payload) => synchronousDispatcher(REGISTER, payload);