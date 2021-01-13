import React from "react";
import headerClasses from "./header.module.scss";
import Navbar from "./navbar/Navbar";
import SearchBar from "./searchBar/SearchBar";
import {DrawerSearchContext} from "../../App";
import {HIDE_ALL} from "../../utilities/constant";

/**
 * Header component
 * @description The Header component is for displaying header data. It is a wrapper for the search bar and
 * navbar data and other useful data !!!
 * It will use @DrawerSearchContext in CONSUMER mode to check the
 * visibility and also trigger this one with @toggleAuthVisibility
 * @author Arnaud LITAABA
 */
const Header = () => {

    const {header, contentWrapper, searchInput} = headerClasses;

    return (

        <DrawerSearchContext.Consumer>
            {({mobileSearch, setContextValue}) => {
                return <header className={header}>
                    <Navbar mobileSearch={mobileSearch}
                            toggleMobileSearch={() => setContextValue("mobileSearch", !mobileSearch)}/>
                    <div className={contentWrapper}>
                        {mobileSearch &&
                        <SearchBar searchInputClass={searchInput}
                                   onClick={() => setContextValue(HIDE_ALL, !mobileSearch)}
                                   mobile/>}
                    </div>
                </header>
            }}
        </DrawerSearchContext.Consumer>

    );
}

export default Header
