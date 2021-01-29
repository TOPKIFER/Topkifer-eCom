import React from "react";
import LoginUserIcon from "assets/icons/userLogin.svg";
import Icon from "components/icon/Icon";
import loginClasses from "./login.module.scss";
import user from "assets/icons/user.svg"
import lock from "assets/icons/lock.svg"
import {defaultIconSize} from "utilities/constant";
import LoginIcon from "assets/icons/login.svg";
import {connect} from "react-redux";
import {logInTheUser} from "redux/actions/auth/login/loginActions";
import {getMessage} from "../../../utilities/i18n";

/**
 * Login component
 * @param {Function} changeTab set actual tab to login
 * @param {Function} logInTheUser log in the user
 * @author Arnaud LITAABA
 */
const Login = ({changeTab, logInTheUser}) => {

    const {
        login,
        loginHeader,
        loginContent,
        input,
        inputRadio,
        loginButton,
        otherLoginOptions,
        label,
        rememberMe,
        lostPassword,
        customRadio, usefulMessage,
        text
    } = loginClasses;

    const connectTheUser = () => {
        // login staff, for now just simulating
        logInTheUser({isLoggedIn: true})
    }


    return (
        <div className={login}>
            <div className={loginHeader}>
                <Icon
                    src={LoginUserIcon}
                    size="60px"
                />
                <div className={usefulMessage}>
                    <span className={text}>{getMessage("pleaseLoginInToYourAccount")}</span>
                </div>
            </div>
            <div className={loginContent}>
                <label htmlFor="username">
                    <Icon
                        className="mr-1"
                        src={user}
                        size={defaultIconSize}
                    />
                    <span className={label}>{getMessage("username")}</span>
                    <input id="username" type="text" className={input} placeholder={getMessage("enterYourUsername")}/>
                </label>
                <label htmlFor="password">
                    <Icon
                        className="mr-1"
                        src={lock}
                        size={defaultIconSize}
                    />
                    <span className={label}>{getMessage("password")}</span>
                    <input type="password" className={input} placeholder={getMessage("enterYourPassword")}/>
                </label>
                <div className={otherLoginOptions}>
                    <span className={rememberMe}>
                        <label htmlFor="rememberMe">
                             <input className={inputRadio} type="checkbox" name="rememberMe"/>
                             <span className={customRadio}/>
                            <span>{getMessage("rememberMe")}</span>
                        </label>
                    </span>
                    <span className={lostPassword}>{getMessage("lostYourPassword")}</span>
                </div>
                <button onClick={connectTheUser} className={loginButton}>
                    <Icon
                        className="mr-2"
                        src={LoginIcon}
                        size={defaultIconSize}
                    />
                    <span>{getMessage("login")}</span>
                </button>
            </div>
            <div className={usefulMessage}>
                <span className={text}
                      onClick={() => changeTab("register")}
                >{getMessage("doNotHaveAnAccountCreateNow")}</span>
            </div>
        </div>
    );
}

/**
 * connect the login Component to the whole store
 * @description Extract the function we need here
 * Bind it to login props
 * @author Arnaud LITAABA
 */
export default connect(null, {
    logInTheUser
})(Login)
