import React from "react";
import {NavLink} from "react-router-dom";
import LogoMobile from "assets/Logo/logo.jpg"
import LogoDesktop from "assets/Logo/tklogoword1-resized.png"
import navbarClasses from "./navbar.module.scss"
import SearchBar from "../searchBar/SearchBar";
import bag from "assets/icons/bag.svg"
import search from "assets/icons/search.svg"
import user from "assets/icons/user.svg"
import heart from "assets/icons/heart.svg"
import menu from "assets/icons/menu.svg"
import Icon from "components/icon/Icon";
import {multipleClasses, overTen, toggleAuthVisibility} from "utilities/utilities";
import {height} from "utilities/constant"
import {AuthContext} from "App";

const {
    navbar, navWrapper,
    menuIconAndLogo,
    logoContainer,
    logoMobileContainer,
    logo,
    icons, icon, notOnMobile,
    searchIcon,
    bagBadge
} = navbarClasses;

const LogoFiles = (classes, mobile) => <div className={classes}>
    <NavLink exact to="/">
        <img className={logo} src={mobile ? LogoMobile : LogoDesktop} alt="topkifer logo"/>
    </NavLink>
</div>

const Navbar = (props) => {
    const {toggleMobileSearch, mobileSearch} = props;

    return (
        <div className={navbar}>
            <div className={navWrapper}>
                <div className={menuIconAndLogo}>
                    <AuthContext.Consumer>
                        {({visible, setContextValue}) => (
                            <Icon
                                onClick={() => toggleAuthVisibility(setContextValue, !visible)}
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
                {LogoFiles(logoMobileContainer, true)}
                <div className={icons}>
                    {
                        !mobileSearch && <Icon
                            onClick={toggleMobileSearch}
                            className={multipleClasses(icon, searchIcon, "mr-2")}
                            src={search}
                            style={{
                                height,
                            }}
                            alt="search-icon"
                        />
                    }

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
                            overTen(120)
                        }</div>
                        <Icon
                            src={bag}
                            style={{
                                height
                            }}
                            alt="bag-icon"
                        />
                    </NavLink>
                    <Icon
                        className={multipleClasses(icon, notOnMobile)}
                        src={user}
                        style={{
                            height,
                        }}
                        alt="user-icon"
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar
