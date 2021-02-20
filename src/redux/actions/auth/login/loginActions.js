import {REDUX_CONSTANTS} from "utilities/constant";
import {synchronousDispatcher} from "../../rootActions";

const {LOGIN, ADD_TO_CART} = REDUX_CONSTANTS;

export const logInTheUser = (payload) => synchronousDispatcher(LOGIN, payload);
export const addToCart = (payload) => synchronousDispatcher(ADD_TO_CART, payload);