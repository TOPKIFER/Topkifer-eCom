import React, {useState} from "react";
import authClasses from "./menu.module.scss"
import {multipleClasses, upperFist} from "../../utilities/utilities";
import Icon from "components/icon/Icon";
import LoginIcon from "assets/icons/login.svg"
import RegisterIcon from "assets/icons/register.svg"
import UserIcon from "assets/icons/user.svg"
import {accountConstants, categoriesConstants, height} from "utilities/constant";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import menuIcon from "../../assets/icons/menu.svg";
import ListMenu from "../../components/listMenu/ListMenu";

const Menu = () => {
    const {menu, menuTab, menuTabContent, loginTab, registerTab, active} = authClasses;

    const MENU = "menu";
    const LOGIN = "login";
    const REGISTER = "register";

    const [activeTab, setActiveTab] = useState(MENU);

    const [simulateLogin, setSimulateLogin] = useState(false);


    const listMenuConstants = [...categoriesConstants]
    const listAccountConstants = [...accountConstants.map(value => {
        return {...value, onClick: () => setSimulateLogin(false)}
    })]

    const isLogin = () => activeTab === LOGIN;
    const isRegister = () => activeTab === REGISTER;
    const isMenu = () => activeTab === MENU;
    const isDefault = () => (isLogin() || isMenu());

    return <div className={menu}>
        <div className={menuTab}>
            <div
                onClick={() => setActiveTab("menu")}
                className={multipleClasses(loginTab, isMenu() ? active : "")}>
                <Icon
                    src={menuIcon}
                    style={{
                        height,
                    }}
                    alt="menu-icon"
                />

                <span className="ml-2">{upperFist(MENU)}</span>
            </div>
            <div
                onClick={() => setActiveTab("login")}
                className={multipleClasses(registerTab, (isLogin() || isRegister()) ? active : "")}>

                <Icon
                    src={isDefault() ? simulateLogin ? UserIcon : LoginIcon : RegisterIcon}
                    style={{
                        height
                    }}
                    alt={`icon-${isDefault() ? simulateLogin ? "user" : "login" : "register"}`}
                />

                <span className="ml-2">
                    {simulateLogin ? "My account" : !isMenu() ? upperFist(activeTab) : upperFist(LOGIN)}
                </span>
            </div>
        </div>
        {
            isMenu() ? <ListMenu lists={listMenuConstants}/> : simulateLogin ?
                <ListMenu lists={listAccountConstants}/> :
                <div className={menuTabContent}>
                    {
                        isLogin() ? !simulateLogin ?
                            <Login simulateLogin={setSimulateLogin} changeTab={setActiveTab}/> :
                            "COMPTE" :
                            <Register changeTab={setActiveTab}/>
                    }
                </div>
        }
    </div>
}

export default Menu