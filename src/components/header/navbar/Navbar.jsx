import React, {useState} from "react";
import {Heart, Menu, Search, ShoppingBag, User} from "react-feather";
import {NavLink} from "react-router-dom";
import Logo from "assets/Logo/logo.jpg"
import navbarClasses from "./navbar.module.scss"
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {

    const [mobileSearch, showMobileSearch] = useState(false);

    const toggleMobileSearch = () => {
        showMobileSearch(!mobileSearch)
    }

    const {
        navbar, navWrapper,
        menuIconAndLogo,
        logoContainer, logo,
        icons, icon,
    } = navbarClasses;
    return (
        <div className={navbar}>
            <div className={navWrapper}>
                <div className={menuIconAndLogo}>
                    <Menu size="40"/>
                    <div className={logoContainer}>
                        <NavLink exact to="/">
                            <img className={logo} src={Logo} alt="topkifer logo"/>
                        </NavLink>
                    </div>
                </div>
                <SearchBar/>
                <div className={icons}>
                    {
                        mobileSearch ? <SearchBar mobile/> : <Search onClick={toggleMobileSearch} className={icon}/>

                    }

                    <User className={icon}/>
                    <NavLink className={icon} to="/favorite">
                        <Heart/>
                    </NavLink>
                    <NavLink className={icon} to="/cart">
                        <ShoppingBag/>
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
