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
import {DrawerSearchContext} from "App";

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

/**
 * LogoFiles
 * @description The LogoFiles function is for displaying the logo
 * @param {String} classes The wrapper class of the logo
 * @param {Boolean} mobile to know if we are displaying the logo on mobile or not
 * @author Arnaud LITAABA
 */
const LogoFiles = (classes, mobile) => <div className={classes}>
    <NavLink exact to="/">
        <img className={logo} src={mobile ? LogoMobile : LogoDesktop} alt="topkifer logo"/>
    </NavLink>
</div>

/**
 * Navbar component
 * @description The Navbar function is for displaying all navbar elements.
 * It will use @DrawerSearchContext in CONSUMER mode to check the visibility
 * and also trigger this one with @toggleAuthVisibility
 * @param {props} props props all properties of the AppRoute component inherited or not
 * @author Arnaud LITAABA
 */
const Navbar = (props) => {

    const {toggleMobileSearch, mobileSearch} = props;

    return (
        <div className={navbar}>
            <div className={navWrapper}>
                <div className={menuIconAndLogo}>
                    <DrawerSearchContext.Consumer>
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
                    </DrawerSearchContext.Consumer>
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
