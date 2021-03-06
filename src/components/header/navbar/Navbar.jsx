import React from "react";
import {NavLink} from "react-router-dom";
import LogoMobile from "assets/Logo/logo.jpg"
import LogoMobileBlack from "assets/Logo/Wordmark Blue.png"
import LogoBlue from "assets/Logo/Wordmark Blue.png"
import LogoDesktop from "assets/Logo/Wordmark Blue White.png"
import navbarWhiteClasses from "./navbarWhite.module.scss"
import navbarBlackClasses from "./navbarBlack.module.scss"
import SearchBar from "../searchBar/SearchBar";
import bag from "assets/icons/bag.svg"
import search from "assets/icons/search.svg"
import user from "assets/icons/user.svg"
import heart from "assets/icons/heart.svg"
import menu from "assets/icons/menu.svg"
import Icon from "components/icon/Icon";
import {multipleClasses, overTen, toggleAuthVisibility} from "utilities/utilities";
import {APP_URL, defaultIconSize, WHITE} from "utilities/constant"
import {DrawerCartContext, DrawerSearchContext} from "App";
import {connect} from "react-redux";

/**
 * Navbar component
 * @description The Navbar function is for displaying all navbar elements.
 * It will use @DrawerSearchContext in CONSUMER mode to check the visibility
 * and also trigger this one with @toggleAuthVisibility
 * @param {Function} toggleMobileSearch toggle the mobile search visibility
 * @param {Boolean} mobileSearch track the mobile search visibility
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} rest the other useful props
 * @author Arnaud LITAABA
 */
const Navbar = ({toggleMobileSearch, mobileSearch, actualTheme, ...rest}) => {

    const {cartTotal} = rest;

    const {
        navbar, navWrapper,
        menuIconAndLogo,
        logoContainer,
        logo,
        logoMobileContainer,
        icons, icon, notOnMobile,
        searchIcon,
        bagBadge
    } = actualTheme === WHITE ? navbarWhiteClasses : navbarBlackClasses;

    const {FAVORITE, CART} = APP_URL;


    /**
     * LogoFiles
     * @description The LogoFiles function is for displaying the logo
     * @param {String} classes The wrapper class of the logo
     * @param {Boolean} mobile to know if we are displaying the logo on mobile or not
     * @author Arnaud LITAABA
     */
    const LogoFiles = (classes, mobile) => <div className={classes}>
        <NavLink exact to="/">
            {
                actualTheme === WHITE ?
                    <img className={logo} src={mobile ? LogoMobile : LogoDesktop} alt="topkifer logo"/>
                    :
                    <img className={logo} src={mobile ? LogoMobileBlack : LogoBlue} alt="topkifer logo"/>
            }
        </NavLink>
    </div>

    return (
        <div className={navbar}>
            <div className={navWrapper}>
                <div className={menuIconAndLogo}>
                    <DrawerSearchContext.Consumer>
                        {/*
        We use destructuring to extract only the data
        we need from DrawerSearchContext. And here we have :
        - visible to track the drawer visibility.
        - setContextValue to toggle the visibility of menu
        */}
                        {({visible, setContextValue}) => (
                            <DrawerCartContext.Consumer>
                                {
                                    ({visible: cart, setCartContextValue}) => (
                                        <Icon
                                            onClick={() => {
                                                toggleAuthVisibility(setContextValue, !visible);
                                                if (cart) toggleAuthVisibility(setCartContextValue, !cart);
                                                return cart
                                            }}
                                            className={multipleClasses(icon, "pointer")}
                                            src={menu}
                                            size={defaultIconSize}
                                        />
                                    )
                                }
                            </DrawerCartContext.Consumer>

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
                            size={defaultIconSize}
                        />
                    }

                    <NavLink className={icon} to={FAVORITE}>
                        <Icon
                            className={icon}
                            src={heart}
                            size={defaultIconSize}
                        />
                    </NavLink>
                    <NavLink className={icon} to={CART}>
                        {cartTotal > 0 && <div className={bagBadge}>{
                            overTen(cartTotal)
                        }</div>}
                        <Icon
                            className={icon}
                            src={bag}
                            size={defaultIconSize}
                        />
                    </NavLink>
                    <Icon
                        wrapperClassName={notOnMobile}
                        className={icon}
                        src={user}
                        size={defaultIconSize}
                    />
                </div>
            </div>
        </div>
    );
}


/**
 * connect the navbar Component to the whole store
 * Extract the theme value
 * @param {Object} state the whole state managed by redux
 * @return {Object} all desired value from redux
 * @author Arnaud LITAABA
 */
const mapStateToProps = state => {
    return {
        actualTheme: state.themeState.actualTheme,
        cartTotal: state.loginState.loggedInUser.cart.length
    }
}

/**
 * connect the navbar Component to the whole store
 * @description Extract the theme value
 * bind theme value to navbar props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(Navbar)
