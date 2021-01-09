import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "assets/Logo/logo.jpg"
import navbarClasses from "./navbar.module.scss"
import SearchBar from "../searchBar/SearchBar";
import bag from "assets/icons/bag.svg"
import search from "assets/icons/search.svg"
import user from "assets/icons/user.svg"
import heart from "assets/icons/heart.svg"
import menu from "assets/icons/menu.svg"
import Icon from "../../icon/Icon";
import {multipleClasses, overHundred} from "utilities/utilities";
import {height} from "utilities/constant"
import {AuthContext} from "../../../App";
import {toggleAuthVisibility} from "../../../utilities/utilities";

const {
    navbar, navWrapper,
    menuIconAndLogo,
    logoContainer,
    logoMobileContainer,
    logo,
    icons, icon,
    bagBadge
} = navbarClasses;

const LogoFiles = (classes) => <div className={classes}>
    <NavLink exact to="/">
        <img className={logo} src={Logo} alt="topkifer logo"/>
    </NavLink>
</div>

const Navbar = (props) => {
    const {toggleMobileSearch, mobileSearch} = props;

    return (
        <div className={navbar}>
            <div className={navWrapper}>
                <div className={menuIconAndLogo}>
                    <AuthContext.Consumer>
                        {({visible, setVisible}) => (
                            <Icon
                                onClick={() => toggleAuthVisibility(setVisible, !visible)}
                                className={multipleClasses(icon, "pointer")}
                                src={menu}
                                style={{
                                    height,
                                }}
                                alt="menu-icon"
                            />
                        )}
                    </AuthContext.Consumer>
                    {LogoFiles(logoContainer)}
                </div>
                <SearchBar/>
                {LogoFiles(logoMobileContainer)}
                <div className={icons}>
                    {
                        !mobileSearch && <Icon
                            onClick={toggleMobileSearch}
                            className={multipleClasses(icon, "mr-2")}
                            src={search}
                            style={{
                                height,
                            }}
                            alt="search-icon"
                        />
                    }

                    <Icon
                        className={icon}
                        src={user}
                        style={{
                            height,
                        }}
                        alt="user-icon"
                    />
                    <NavLink className={icon} to="/favorite">
                        <Icon
                            src={heart}
                            style={{
                                height,
                            }}
                            alt="heart-icon"
                        />
                    </NavLink>
                    <NavLink className={icon} to="/cart">
                        <div className={bagBadge}>{
                            overHundred(120)
                        }</div>
                        <Icon
                            src={bag}
                            style={{
                                height
                            }}
                            alt="bag-icon"
                        />
                    </NavLink>
                </div>
                {
                    /*

            
                <Menum/>
                     */
                }
            </div>
        </div>
    );
}

export default Navbar
