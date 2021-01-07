import React from "react";
import {Search} from "react-feather";
import searchBarClasses from "./searchBar.module.scss"

const SearchBar = ({mobile}) => {
    const {
        searchBar,
        searchInput,
        searchInputMobile,
        searchBarMobile
    } = searchBarClasses;
    return <div className={!mobile ? searchBar : searchBarMobile}>
        <Search className="mr-2"/>
        <input className={!mobile ? searchInput : searchInputMobile} type="text" placeholder="Search anything you want"/>
    </div>
}

export default SearchBar