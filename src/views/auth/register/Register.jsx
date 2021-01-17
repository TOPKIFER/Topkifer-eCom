import React from "react";
import RegisterUserIcon from "../../../assets/icons/userRegister.svg";
import Icon from "../../../components/icon/Icon";
import registerClasses from "./register.module.scss"
import user from "../../../assets/icons/user.svg";
import {defaultIconSize} from "../../../utilities/constant";
import lock from "../../../assets/icons/lock.svg";
import LoginIcon from "../../../assets/icons/login.svg";
import mailIcon from "../../../assets/icons/email.svg";
import contactIcon from "../../../assets/icons/contacts.svg";

/**
 * Register component
 * @param {props} props all properties of the register component inherited or not
 * @author Arnaud LITAABA
 */
const Register = (props) => {

    const {
        register,
        registerHeader,
        registerContent,
        input,
        registerButton,
        label,
        usefulMessage,
        text
    } = registerClasses;

    const {changeTab} = props;

    return (
        <div className={register}>
            <div className={registerHeader}>
                <Icon
                    src={RegisterUserIcon}
                    size="60px"
                />
                <div className={usefulMessage}>
                    <span className={text}>Please create your account</span>
                </div>
            </div>

            <div className={registerContent}>
                <label htmlFor="username">
                    <Icon
                        className="mr-1"
                        src={user}
                        size={defaultIconSize}
                    />
                    <span className={label}>Username</span>
                    <input id="username" type="text" className={input} placeholder="Enter your username"/>
                </label>
                <label htmlFor="email">
                    <Icon
                        className="mr-1"
                        src={mailIcon}
                        size={defaultIconSize}
                    />
                    <span className={label}>Email</span>
                    <input id="username" type="text" className={input} placeholder="Enter your email"/>
                </label>
                <label htmlFor="password">
                    <Icon
                        className="mr-1"
                        src={lock}
                        size={defaultIconSize}
                    />
                    <span className={label}>Password</span>
                    <input type="password" className={input} placeholder="Enter your password"/>
                </label>
                <label htmlFor="email">
                    <Icon
                        className="mr-1"
                        src={contactIcon}
                        size={defaultIconSize}
                    />
                    <span className={label}>Contact</span>
                    <input id="username" type="tel" className={input} placeholder="Enter your phone number"/>
                </label>
                <button className={registerButton}>
                    <Icon
                        className="mr-2"
                        src={LoginIcon}
                        size={defaultIconSize}
                    />
                    <span>Register</span>
                </button>
            </div>

            <div className={usefulMessage}>
                <span className={text}
                      onClick={() => changeTab("auth")}
                >Already have an account ? Login now</span>
            </div>

        </div>
    );
}

export default Register
