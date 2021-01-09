import React from "react";
import LoginUserIcon from "../../../assets/icons/userLogin.svg";
import Icon from "../../../components/icon/Icon";
import loginClasses from "./login.module.scss";
import user from "assets/icons/user.svg"
import lock from "assets/icons/lock.svg"
import {height} from "../../../utilities/constant";
import LoginIcon from "../../../assets/icons/login.svg";

const Login = (props) => {

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

    const {changeTab} = props;

    return (
        <div className={login}>
            <div className={loginHeader}>
                <Icon
                    src={LoginUserIcon}
                    style={{
                        height: "60px"
                    }}
                    alt="icon-login-user"
                />
            </div>
            <div className={usefulMessage}>
                <span className={text}>Please login to your account</span>
            </div>
            <div className={loginContent}>
                <label htmlFor="username">
                    <Icon
                        className="mr-1"
                        src={user}
                        style={{
                            height,
                        }}
                        alt="user-icon"
                    />
                    <span className={label}>Username</span>
                    <input id="username" type="text" className={input} placeholder="Enter your username"/>
                </label>
                <label htmlFor="password">
                    <Icon
                        className="mr-1"
                        src={lock}
                        style={{
                            height,
                        }}
                        alt="user-icon"
                    />
                    <span className={label}>Password</span>
                    <input type="password" className={input} placeholder="Enter your password"/>
                </label>
                <div className={otherLoginOptions}>
                    <span className={rememberMe}>
                        <label htmlFor="rememberMe">
                             <input className={inputRadio} type="checkbox" name="rememberMe"/>
                             <span className={customRadio}/>
                            <span>Remember me</span>
                        </label>
                    </span>
                    <span className={lostPassword}>Lost your password ?</span>
                </div>
                <button className={loginButton}>
                    <Icon
                        className="mr-2"
                        src={LoginIcon}
                        style={{
                            height,
                        }}
                        alt="user-icon"
                    />
                    <span>Login</span>
                </button>
            </div>
            <div className={usefulMessage}>
                <span className={text}
                      onClick={() => changeTab("register")}
                >Do not have an account ? Create now</span>
            </div>
        </div>
    );
}

export default Login
