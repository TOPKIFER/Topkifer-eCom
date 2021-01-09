import React, {useState} from "react";
import authClasses from "./auth.module.scss"
import {multipleClasses} from "../../utilities/utilities";
import Icon from "components/icon/Icon";
import LoginIcon from "assets/icons/login.svg"
import RegisterIcon from "assets/icons/register.svg"
import {height} from "utilities/constant";
import Login from "./login/Login";
import Register from "./register/Register";

const Auth = () => {
    const {auth, authTab, authTabContent, loginTab, registerTab, active} = authClasses;

    const [activeTab, setActiveTab] = useState("login");

    return <div className={auth}>
        <div className={authTab}>
            <div
                onClick={() => setActiveTab("login")}
                className={multipleClasses(loginTab, activeTab === "login" ? active : "")}>
                <Icon
                    src={LoginIcon}
                    style={{
                        height
                    }}
                    alt="icon-login"
                />
                <span className="ml-2">Login</span>
            </div>
            <div
                onClick={() => setActiveTab("register")}
                className={multipleClasses(registerTab, activeTab === "register" ? active : "")}>
                <Icon
                    src={RegisterIcon}
                    style={{
                        height
                    }}
                    alt="icon-register"
                />
                <span className="ml-2">Register</span>
            </div>
        </div>
        <div className={authTabContent}>
            {
                activeTab === "login" ? <Login changeTab={setActiveTab}/> : <Register changeTab={setActiveTab}/>
            }
        </div>
    </div>
}

export default Auth