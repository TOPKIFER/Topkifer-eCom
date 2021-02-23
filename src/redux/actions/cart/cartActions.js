import {REDUX_CONSTANTS} from "utilities/constant";
import {synchronousDispatcher} from "../rootActions";


export const changeCart = (payload) => synchronousDispatcher(REDUX_CONSTANTS.CHANGE_CART, payload);