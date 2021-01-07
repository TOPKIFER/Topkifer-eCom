import React from "react";
import {Heart, Menu, Search, User} from "react-feather";
import {NavLink} from "react-router-dom";
import Logo from "assets/Logo/logo.jpg"
import navbarClasses from "./navbar.module.scss"
import SearchBar from "../searchBar/SearchBar";
import bag from "assets/icons/bag.svg"
import Icon from "../../icon/Icon";

const Navbar = (props) => {

    const {toggleMobileSearch} = props;
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
                    <Search onClick={toggleMobileSearch} className={icon}/>
                    <User className={icon}/>
                    <NavLink className={icon} to="/favorite">
                        <Heart/>
                    </NavLink>
                    <NavLink className={icon} to="/cart">
                        <Icon
                            src={bag}
                            style={{
                                height: "24px",
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
