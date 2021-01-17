import {combineReducers} from "redux";
import loginReducer from "./auth/login/loginReducer";
import registerReducer from "./auth/register/registerReducer";
import themeReducer from "./theme/themeReducer";

const rootReducers = combineReducers({
    loginState: loginReducer,
    registerState: registerReducer,
    themeState: themeReducer,
})

export default rootReducers