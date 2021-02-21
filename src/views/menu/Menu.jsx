import React, {useState} from "react";
import menuWhiteClasses from "./menuWhite.module.scss"
import menuBlackClasses from "./menuBlack.module.scss"
import {multipleClasses, toggleAuthVisibility, upperFist} from "utilities/utilities";
import Icon from "components/icon/Icon";
import LoginIcon from "assets/icons/login.svg"
import RegisterIcon from "assets/icons/register.svg"
import UserIcon from "assets/icons/user.svg"
import {
    accountConstants,
    BLACK,
    categoriesConstants,
    defaultIconSize,
    ENGLISH_LANGUAGE,
    FRENCH_LANGUAGE,
    WHITE
} from "utilities/constant";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import menuIcon from "assets/icons/menu.svg";
import menu from "assets/icons/menu.svg";
import ListMenu from "components/listMenu/ListMenu";
import {connect} from "react-redux"
import {logInTheUser} from "redux/actions/auth/login/loginActions";
import {changeTheme} from "redux/actions/theme/themeActions";
import {changeCurrentLanguage} from "redux/actions/language/languageActions";
import {getMessage} from "utilities/i18n";
import {DrawerSearchContext} from "App";

/**
 * Menu component
 * @param {Boolean} isLoggedIn tell us if the user is logged in, from redux
 * @param {Function} logInTheUser log in the user
 * @param {String} actualTheme Actual theme of the app
 * @param {String} actualLanguage Actual language of the app
 * @param {Function} changeTheme for changing app theme
 * @param {Function} changeCurrentLanguage for changing app language
 * @author Arnaud LITAABA
 */
const Menu = ({isLoggedIn, logInTheUser, actualTheme, actualLanguage, changeTheme, changeCurrentLanguage}) => {
    const {
        menu,
        menuTab,
        menuTabContent,
        loginTab,
        registerTab,
        active,
        closeDrawClass
    } = actualTheme === WHITE ? menuWhiteClasses : menuBlackClasses;

    const MENU = "menu";
    const LOGIN = "auth";
    const REGISTER = "register";

    // State for active Tab
    const [activeTab, setActiveTab] = useState(MENU);

    // Our menu details
    const listMenuConstants = [...categoriesConstants]

    // Our logged in user account details
    const listAccountConstants = [...accountConstants.map(value => {
        const {name} = value;
        let onClick = null;
        switch (name) {
            case "logout":
                onClick = () => logInTheUser({isLoggedIn: false});
                break;
            case "changeTheme":
                onClick = () => changeTheme({actualTheme: actualTheme === WHITE ? BLACK : WHITE});
                break;
            case "changeLanguage":
                // temporary  action
                onClick = () => changeCurrentLanguage({actualLanguage: actualLanguage === ENGLISH_LANGUAGE ? FRENCH_LANGUAGE : ENGLISH_LANGUAGE});
                break;
            default:
                break
        }
        return {...value, onClick}
    })]

    // Tell us is the active tab is auth
    const isLogin = () => activeTab === LOGIN;

    // Tell us is the active tab is auth
    const isRegister = () => activeTab === REGISTER;

    // Tell us is the active tab is register
    const isMenu = () => activeTab === MENU;

    // Tell us is the active tab is auth or menu like default
    const isDefault = () => (isLogin() || isMenu());

    const closeMessage = getMessage("close");

    return <div className={menu}>
        <div className={menuTab}>
            <div
                onClick={() => setActiveTab("menu")}
                className={multipleClasses(loginTab, isMenu() ? active : "")}>
                <Icon
                    src={menuIcon}
                    size={defaultIconSize}
                />

                <span className="ml-2">{upperFist(getMessage(MENU))}</span>
            </div>
            <div
                onClick={() => setActiveTab("auth")}
                className={multipleClasses(registerTab, (isLogin() || isRegister()) ? active : "")}>

                <Icon
                    src={isDefault() ? isLoggedIn ? UserIcon : LoginIcon : RegisterIcon}
                    size={defaultIconSize}
                    alt={`icon-${isDefault() ? isLoggedIn ? "user" : "auth" : "register"}`}
                />

                <span className="ml-2">
                    {isLoggedIn ? getMessage("myAccount") : !isMenu() ? upperFist(activeTab) : upperFist(LOGIN)}
                </span>
            </div>
        </div>
        {
            isMenu() ? <ListMenu lists={listMenuConstants}/> : isLoggedIn ?
                <ListMenu lists={listAccountConstants}/> :
                <div className={menuTabContent}>
                    {
                        isLogin() ? !isLoggedIn ?
                            <Login changeTab={setActiveTab}/> :
                            getMessage("account").toUpperCase() :
                            <Register changeTab={setActiveTab}/>
                    }
                </div>
        }

        <DrawerSearchContext.Consumer>
            {/*
        We use destructuring to extract only the data
        we need from DrawerSearchContext. And here we have :
        - visible to track the drawer visibility.
        - setContextValue to toggle the visibility of menu
        */}
            {({visible, setContextValue}) => (
                <div className={closeDrawClass} onClick={() => toggleAuthVisibility(setContextValue, !visible)}>
                    <span>X {closeMessage}</span>
                </div>
            )}
        </DrawerSearchContext.Consumer>

    </div>
}

/**
 * connect the menu Component to the whole store
 * Extract the function and the value of the whole state we need here
 * @param {Object} state the whole state managed by redux
 * @return {Object} all desired value from redux
 * @author Arnaud LITAABA
 */
const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginState.isLoggedIn,
        actualTheme: state.themeState.actualTheme,
        actualLanguage: state.languageState.actualLanguage,
    }
}

/**
 * connect the Menu Component to the whole store
 * @description Extract the function and the value of the whole state we need here
 * Bind all extracted values to menu props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps, {
    logInTheUser,
    changeTheme,
    changeCurrentLanguage,
})(Menu)