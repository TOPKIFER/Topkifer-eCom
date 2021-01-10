import React from "react";
import headerClasses from "./header.module.scss";
import Navbar from "./navbar/Navbar";
import SearchBar from "./searchBar/SearchBar";
import {AuthContext} from "../../App";

const Header = () => {

    const {header, contentWrapper, searchInput} = headerClasses;

    return (

        <AuthContext.Consumer>
            {({mobileSearch, setContextValue}) => {
                return <header className={header}>
                    <Navbar mobileSearch={mobileSearch}
                            toggleMobileSearch={() => setContextValue("mobileSearch", !mobileSearch)}/>
                    <div className={contentWrapper}>
                        {mobileSearch &&
                        <SearchBar searchInputClass={searchInput}
                                   onClick={() => setContextValue("mobileSearch", !mobileSearch)}
                                   mobile/>}
                    </div>
                </header>
            }}
        </AuthContext.Consumer>

    );
}

export default Header
