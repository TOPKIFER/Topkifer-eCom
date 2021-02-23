import {combineReducers} from "redux";
import loginReducer from "./auth/login/loginReducer";
import registerReducer from "./auth/register/registerReducer";
import themeReducer from "./theme/themeReducer";
import languageReducer from "./language/languageReducer";
import cartReducer from "redux/reducers/cart/cartReducer";

const rootReducers = combineReducers({
    loginState: loginReducer,
    registerState: registerReducer,
    themeState: themeReducer,
    languageState: languageReducer,
    cartState: cartReducer
})

export default rootReducers