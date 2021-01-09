import React from "react";
import RegisterUserIcon from "../../../assets/icons/userRegister.svg";
import Icon from "../../../components/icon/Icon";
import registerClasses from "./register.module.scss"
import user from "../../../assets/icons/user.svg";
import {height} from "../../../utilities/constant";
import lock from "../../../assets/icons/lock.svg";
import LoginIcon from "../../../assets/icons/login.svg";
import mailIcon from "../../../assets/icons/email.svg";

const Register = (props) => {

    const {
        register,
        registerHeader,
        registerContent,
        input,
        inputRadio,
        registerButton,
        otherRegisterOptions,
        label,
        rememberMe,
        lostPassword,
        customRadio,
        usefulMessage,
        text
    } = registerClasses;

    const {changeTab} = props;

    return (
        <div className={register}>
            <div className={registerHeader}>
                <Icon
                    src={RegisterUserIcon}
                    style={{
                        height: "60px"
                    }}
                    alt="icon-register-user"
                />
            </div>
            <div className={usefulMessage}>
                <span className={text}>Please create your account</span>
            </div>
            <div className={registerContent}>
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
                <label htmlFor="email">
                    <Icon
                        className="mr-1"
                        src={mailIcon}
                        style={{
                            height: "24px",
                        }}
                        alt="email-icon"
                    />
                    <span className={label}>Email</span>
                    <input id="username" type="text" className={input} placeholder="Enter your email"/>
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
                <button className={registerButton}>
                    <Icon
                        className="mr-2"
                        src={LoginIcon}
                        style={{
                            height,
                        }}
                        alt="user-icon"
                    />
                    <span>Register</span>
                </button>
            </div>

            <div className={usefulMessage}>
                <span className={text}
                      onClick={() => changeTab("login")}
                >Already have an account ? Login now</span>
            </div>

        </div>
    );
}

export default Register
